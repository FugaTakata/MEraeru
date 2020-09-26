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
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonBackButton,
  IonChip,
  IonIcon,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import questionsModule from "../../modules/questionsModule";
import { useSelector } from "react-redux";
import { questionsSelector } from "../../selectors/questionSelecctor";

import { closeCircleOutline } from "ionicons/icons";

const EditQuestion = () => {
  const history = useHistory();
  const params = useParams();
  const index = +params.id;
  const state = useSelector(questionsSelector)[+params.id];
  const [title, setTitle] = useState(state.title);
  const [question, setQuestion] = useState(state.question);
  const [tags, setTags] = useState(JSON.parse(JSON.stringify(state.tags)));
  const [tag, setTag] = useState("");
  const dispatch = useDispatch();

  const editQuestion = (action) => {
    dispatch(questionsModule.actions.editQuesiton(action));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton text="戻る" defaultHref="/home" />
          </IonButtons>
          <IonTitle color="primary">質問の編集</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            editQuestion({ title, question, tags, index });
            history.push("/home");
          }}
        >
          <IonList>
            <IonListHeader>
              <IonText color="primary">
                <p>編集が可能です。</p>
              </IonText>
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
                slot="end"
                type="button"
                disabled={!tag}
                style={{ margin: "auto 0" }}
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
            {tags?.length >= 0
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
            disabled={
              state.title === title &&
              state.question === question &&
              JSON.stringify(state.tags) === JSON.stringify(tags)
            }
          >
            編集
          </IonButton>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default EditQuestion;
