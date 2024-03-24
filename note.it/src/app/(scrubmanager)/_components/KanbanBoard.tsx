import KanbanLane from "./KanbanLane";
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import { Card } from "./types";
import NonNullableCard from "./types";
import AddCard from "./AddCard";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "@/app/config/firebase";

const KanbanBoard = () => {
  const [todoItems, setTodoItems] = useState<Array<Card>>([]);
  const [doneItems, setDoneItems] = useState<Array<Card>>([]);
  const [inProgressItems, setInProgressItems] = useState<Array<Card>>([]);
  const [uItems, setuItems] = useState<Array<Card>>([]);

  useEffect(() => {
    6 + 9;
    const fetchItems = async () => {
      try {
        const fetchItemsFromCollection = async (collectionName: string) => {
          const snapshot = await getDocs(collection(db, collectionName));
          return snapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                title: doc.data().title || "",
                ...doc.data(),
              } as Card)
          );
        };

        const todoData = await fetchItemsFromCollection("todoItems");
        setTodoItems(
          todoData.map(
            (card) =>
              ({
                ...card,
                title: card.title || "",
              } as NonNullableCard)
          )
        );

        const doneData = await fetchItemsFromCollection("doneItems");
        setDoneItems(
          doneData.map(
            (card) =>
              ({
                ...card,
                title: card.title || "",
              } as NonNullableCard)
          )
        );

        const inProgressData = await fetchItemsFromCollection(
          "inProgressItems"
        );
        setInProgressItems(
          inProgressData.map(
            (card) =>
              ({
                ...card,
                title: card.title || "",
              } as NonNullableCard)
          )
        );

        const uData = await fetchItemsFromCollection("uItems");
        setuItems(
          uData.map(
            (card) =>
              ({
                ...card,
                title: card.title || "",
              } as NonNullableCard)
          )
        );
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchItems();
  }, []);

  const addNewCard = async (title: string) => {
    try {
      const docRef = await addDoc(collection(db, "uItems"), { title });
      if (docRef.id) {
        setuItems([...uItems, { title }]);
      } else {
        console.error("Error adding document: Document ID not found");
      }
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const updateFirestoreOnDragEnd = async (
    title: string,
    newIndex: number,
    newParent: string
  ) => {
    try {
      // Delete the card from the previous collection
      let prevCollectionName = "";
      switch (title) {
        case "To Do":
          prevCollectionName = "todoItems";
          break;
        case "In Progress":
          prevCollectionName = "inProgressItems";
          break;
        case "Done":
          prevCollectionName = "doneItems";
          break;
        default:
          prevCollectionName = "uItems";
      }

      const prevCollectionRef = collection(db, prevCollectionName);
      const querySnapshot = await getDocs(prevCollectionRef);
      querySnapshot.forEach(async (doc) => {
        if (doc.data().title === title) {
          await deleteDoc(doc.ref);
        }
      });

      // Add the card to the new collection
      let newCollectionName = "";
      switch (newParent) {
        case "To Do":
          newCollectionName = "todoItems";
          break;
        case "In Progress":
          newCollectionName = "inProgressItems";
          break;
        case "Done":
          newCollectionName = "doneItems";
          break;
        default:
          newCollectionName = "uItems";
      }
      await addDoc(collection(db, newCollectionName), { title });

      // Update state accordingly
      switch (newParent) {
        case "To Do":
          setTodoItems([...todoItems, { title }]);
          break;
        case "In Progress":
          setInProgressItems([...inProgressItems, { title }]);
          break;
        case "Done":
          setDoneItems([...doneItems, { title }]);
          break;
        default:
          setuItems([...uItems, { title }]);
      }

      // Remove the card from the previous state
      switch (title) {
        case "To Do":
          setTodoItems(todoItems.filter((item) => item.title !== title));
          break;
        case "In Progress":
          setInProgressItems(
            inProgressItems.filter((item) => item.title !== title)
          );
          break;
        case "Done":
          setDoneItems(doneItems.filter((item) => item.title !== title));
          break;
        default:
          setuItems(uItems.filter((item) => item.title !== title));
      }
    } catch (error) {
      console.error("Error updating Firestore: ", error);
    }
  };

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const title = e.active.data.current?.title ?? "";
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? "ToDo";

        if (container === "To Do") {
          updateFirestoreOnDragEnd(title, index, "To Do");
        } else if (container === "Done") {
          updateFirestoreOnDragEnd(title, index, "Done");
        } else if (container === "Unassigned") {
          updateFirestoreOnDragEnd(title, index, "Unassigned");
        } else {
          updateFirestoreOnDragEnd(title, index, "In Progress");
        }
      }}
    >
      <Flex flexDirection="column">
        <AddCard addCard={addNewCard} />
        <br />
        <Flex flex="3">
          <KanbanLane title="To Do" items={todoItems} />
          <KanbanLane title="In Progress" items={inProgressItems} />
          <KanbanLane title="Done" items={doneItems} />
          <KanbanLane title="Unassigned" items={uItems} />
        </Flex>
      </Flex>
    </DndContext>
  );
};

export default KanbanBoard;
