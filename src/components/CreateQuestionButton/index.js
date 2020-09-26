import { IonFab, IonFabButton } from "@ionic/react";
import React from "react";

const CreateQuestion = () => {
  return (
    <IonFab vertical="center" horizontal="end" slot="fixed">
      <IonFabButton routerLink="/create-question">Q</IonFabButton>
    </IonFab>
  );
};

export default CreateQuestion;
