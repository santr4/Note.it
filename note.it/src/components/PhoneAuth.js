import {
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { auth } from "@/app/config/firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useRouter } from "next/navigation";
// import { redirect } from "next/navigation";

const PhoneAuth = () => {
  const [phone, setPhone] = useState("+91");
  const [hasFilled, setHasFilled] = useState(false);
  const [otp, setOtp] = useState("");
  const router = useRouter();
  console.log("Router:", router);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(auth, "recaptcha", {
      size: "invisible",
      callback: (response) => {},
    });
  };

  const handleSend = (event) => {
    event.preventDefault();
    setHasFilled(true);
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const verifyOtp = (event) => {
    let otp = event.target.value;
    setOtp(otp);

    if (otp.length === 6 && window.confirmationResult) {
      window.confirmationResult
        .confirm(otp)
        .then((result) => {
          let user = result.user;
          console.log(user);
          alert("User signed in successfully");
          window.location.href = "/documents";
        })
        .catch((error) => {
          alert("User couldn't sign in (bad verification code?)");
        });
    }
  };

  return (
    <div className="app__container">
      <Card sx={{ width: "300px" }}>
        <CardContent
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography sx={{ padding: "20px" }} variant="h5" component="div">
            {!hasFilled ? "Enter your phone number" : "Enter the OTP"}
          </Typography>
          <form onSubmit={handleSend}>
            {!hasFilled ? (
              <>
                <TextField
                  sx={{ width: "240px" }}
                  variant="outlined"
                  autoComplete="off"
                  label="Phone Number"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ width: "240px", marginTop: "20px" }}
                >
                  Send Code
                </Button>
              </>
            ) : (
              <TextField
                sx={{ width: "240px" }}
                variant="outlined"
                label="OTP "
                value={otp}
                onChange={verifyOtp}
              />
            )}
          </form>
        </CardContent>
      </Card>
      <div id="recaptcha"></div>
    </div>
  );
};

export default PhoneAuth;
