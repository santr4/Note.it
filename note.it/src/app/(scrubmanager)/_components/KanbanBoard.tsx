import KanbanLane from "./KanbanLane";
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { DndContext, rectIntersection } from "@dnd-kit/core";
import { Card } from "./types";
import NonNullableCard from "./types";
import AddCard from "./AddCard";
import { collection, addDoc, getDocs } from "firebase/firestore";
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

  const addNewCard = (title: string) => {
    setuItems([...uItems, { title }]);
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
          setTodoItems([...todoItems, { title }]);
        } else if (container === "Done") {
          setDoneItems([...doneItems, { title }]);
        } else if (container === "Unassigned") {
          setuItems([...uItems, { title }]);
        } else {
          setInProgressItems([...inProgressItems, { title }]);
        }
        if (parent === "To Do") {
          setTodoItems([
            ...todoItems.slice(0, index),
            ...todoItems.slice(index + 1),
          ]);
        } else if (parent === "Done") {
          setDoneItems([
            ...doneItems.slice(0, index),
            ...doneItems.slice(index + 1),
          ]);
        } else if (parent === "Unassigned") {
          setuItems([...uItems.slice(0, index), ...uItems.slice(index + 1)]);
        } else {
          setInProgressItems([
            ...inProgressItems.slice(0, index),
            ...inProgressItems.slice(index + 1),
          ]);
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
