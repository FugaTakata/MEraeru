import { IonFab, IonFabButton } from "@ionic/react";
import React from "react";

const CreateQuestion = () => {
  return (
    <IonFab vertical="center" horizontal="end" slot="fixed">
      <IonFabButton routerLink="/create-question">
        <h1 style={{ margin: "auto auto" }}>Q</h1>
      </IonFabButton>
    </IonFab>
  );
};

export default CreateQuestion;
