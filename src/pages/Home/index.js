import {
  IonContent,
  IonListHeader,
  IonPage,
  IonList,
  IonItem,
  IonChip,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonAlert,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonSearchbar,
  IonText,
  IonButton,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { questionsSelector } from "../../selectors/questionSelecctor";
import questionsModule from "../../modules/questionsModule";

import CreateQuestionButton from "../../components/CreateQuestionButton";
import ContributionCalendar from "../../components/ContributionCalendar";

import { informationCircleOutline } from "ionicons/icons";

const Home = () => {
  const history = useHistory();
  const questions = useSelector(questionsSelector);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [index, setIndex] = useState(null);
  const [search, setSearch] = useState("");

  const deleteQuesttion = (action) => {
    dispatch(questionsModule.actions.deleteQuestion(action));
  };

  const Alert = () => {
    return (
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => {
          setShowAlert(false);
          setIndex(null);
        }}
        header={"本当に削除しますか？"}
        message={
          "解決することができなかった質問を削除することはおすすめしません。質問を残しておくことで、あとで成長できる可能性があります。"
        }
        buttons={[
          {
            text: "キャンセル",
            role: "cancel",
          },
          {
            text: "削除する",
            cssClass: "delete__button",
            handler: () => {
              deleteQuesttion({ index });
            },
          },
        ]}
      />
    );
  };

  const QuestionList = () => {
    return (
      <IonList>
        <IonListHeader>
          <IonText color="primary">
            <h2>質問一覧</h2>
          </IonText>
        </IonListHeader>
        {questions
          .filter(
            ({ title, tags }) =>
              title.includes(search) ||
              tags.some((tag) => tag.includes(search)) ||
              search === ""
          )
          .map(({ title, tags, answer }, key) => {
            return (
              <IonItemSliding key={key}>
                <IonItem lines="none">
                  <IonCard
                    routerLink={`/talk/${key}`}
                    type="button"
                    style={{ width: "100vw" }}
                  >
                    <IonCardContent>
                      <h1>{title}</h1>
                      {answer ? (
                        <IonChip color="secondary">回答済み</IonChip>
                      ) : (
                        <IonChip color="danger">未回答</IonChip>
                      )}
                      {tags && tags.length !== 0
                        ? tags.map((tag) => (
                            <IonChip color="primary" key={tag}>
                              {tag}
                            </IonChip>
                          ))
                        : null}
                    </IonCardContent>
                  </IonCard>
                </IonItem>
                <IonItemOptions
                  side="start"
                  onIonSwipe={() => history.push(`/edit-question/${key}`)}
                >
                  <IonItemOption expandable>編集</IonItemOption>
                </IonItemOptions>
                <IonItemOptions
                  side="end"
                  onIonSwipe={() => {
                    setIndex(key);
                    setShowAlert(true);
                  }}
                >
                  <IonItemOption color="danger" expandable>
                    削除
                  </IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            );
          })}
      </IonList>
    );
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle color="primary">
            <h1>miraeru</h1>
          </IonTitle>
          <IonButtons slot="end">
            <IonButton routerLink="/about" color="primary">
              <IonIcon icon={informationCircleOutline} color="primary" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CreateQuestionButton />
        <ContributionCalendar questions={questions} />
        <IonSearchbar
          placeholder="タグやタイトルを検索"
          value={search}
          onIonChange={(e) => setSearch(e.target.value)}
        />
        <QuestionList />
        <Alert />
      </IonContent>
    </IonPage>
  );
};

export default Home;
