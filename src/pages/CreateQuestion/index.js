import {
  IonContent,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonLabel,
  IonTextarea,
  IonButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonChip,
  IonIcon,
} from "@ionic/react";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import questionsModule from "../../modules/questionsModule";
import { useSelector } from "react-redux";
import { questionsSelector } from "../../selectors/questionSelecctor";

import { closeCircleOutline } from "ionicons/icons";

const CreateQuestion = () => {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [question, setQuestion] = useState("");
  const [tags, setTags] = useState([]);
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();

  const questions = useSelector(questionsSelector);

  const createQuestion = (action) => {
    dispatch(questionsModule.actions.createQuestion(action));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="戻る" defaultHref="/home" />
          </IonButtons>
          <IonTitle color="primary">質問する</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form
          onSubmit={() => {
            createQuestion({ title, question, tags });
            history.push(`/talk/${questions.length}`);
          }}
        >
          <IonList>
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
                value={question}
                onIonChange={(e) => setQuestion(e.target.value)}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">タグ</IonLabel>
              <IonInput
                value={tag}
                type="text"
                onIonChange={(e) => setTag(e.target.value)}
              />
              <IonButton
                type="button"
                slot="end"
                disabled={!tag}
                onClick={(e) => {
                  e.preventDefault();
                  if (!tags.includes(tag)) {
                    const tagsTmp = tags;
                    tagsTmp.push(tag);
                    setTags(tagsTmp);
                  }
                  setTag("");
                }}
              >
                追加
              </IonButton>
            </IonItem>
            {tags.length >= 0
              ? tags.map((tag, key) => (
                  <IonChip
                    color="primary"
                    key={key}
                    onClick={() => {
                      const tagsTmp = tags;
                      tagsTmp.splice(key, 1);
                      setTags([...tagsTmp]);
                    }}
                  >
                    {tag}
                    <IonIcon icon={closeCircleOutline} color="danger" />
                  </IonChip>
                ))
              : null}
          </IonList>
          <IonButton
            type="submit"
            expand="block"
            shape="round"
            disabled={!(title && question)}
          >
            作成
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default CreateQuestion;
