import {
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonListHeader,
  IonLabel,
  IonTextarea,
  IonButton,
} from "@ionic/react";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import questionsModule from "../../modules/questionsModule";

const AddQuestion = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const addQuestion = ({ title, content }) => {
    dispatch(questionsModule.actions.addQuestion({ title, content }));
  };
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <form onSubmit={addQuestion}>
          <IonList>
            <IonListHeader>
              <p>質問を作成しましょう。</p>
            </IonListHeader>
            <IonItem>
              <IonLabel position="floating">タイトル</IonLabel>
              <IonInput
                type="text"
                value={title}
                onIonChange={(e) => setTitle(e.target.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">質問文</IonLabel>
              <IonTextarea
                rows={8}
                value={content}
                onIonChange={(e) => setContent(e.target.value)}
              />
            </IonItem>
          </IonList>
          <IonButton
            type="submit"
            expand="block"
            shape="round"
            disabled={!(title && content)}
          >
            作成
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default AddQuestion;
