import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
  IonChip,
} from "@ionic/react";
import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { questionsSelector } from "../../selectors/questionSelecctor";
import questionsModule from "../../modules/questionsModule";
import { useParams } from "react-router";

const Talk = () => {
  const params = useParams();
  const index = +params.id;
  const [answer, setAnswer] = useState("");

  const dispatch = useDispatch();
  const state = useSelector(questionsSelector)[index];

  const sendAnswer = (action) => {
    dispatch(questionsModule.actions.sendAnswer(action));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="戻る" defaultHref="/" />
          </IonButtons>
          <IonTitle color="primary">質問詳細</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>タイトル</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>{state.title}</IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>質問</IonCardTitle>
          </IonCardHeader>
          <IonCardContent style={{ whiteSpace: "pre-line" }}>
            {state.question}
          </IonCardContent>
        </IonCard>
        {state.answer && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>回答</IonCardTitle>
            </IonCardHeader>
            <IonCardContent style={{ whiteSpace: "pre-line" }}>
              {state.answer}
            </IonCardContent>
          </IonCard>
        )}
        {state.tags.length >= 0 && (
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>タグ</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              {state.tags.map((tag, key) => (
                <IonChip color="primary" key={key}>
                  {tag}
                </IonChip>
              ))}
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
      {!state.answer && (
        <IonFooter>
          <IonToolbar>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                sendAnswer({ index, answer });
              }}
            >
              <IonItem>
                <IonLabel position="floating">回答を入力</IonLabel>
                <IonTextarea
                  type="text"
                  value={answer}
                  rows={8}
                  onIonChange={(e) => setAnswer(e.target.value)}
                />
                <IonButton
                  type="submit"
                  slot="end"
                  style={{ margin: "auto 0" }}
                  disabled={!answer}
                >
                  回答
                </IonButton>
              </IonItem>
            </form>
          </IonToolbar>
        </IonFooter>
      )}
    </IonPage>
  );
};

export default Talk;
