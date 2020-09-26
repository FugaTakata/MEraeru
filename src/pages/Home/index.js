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
} from "@ionic/react";
import React, { useState } from "react";

import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { questionsSelector } from "../../selectors/questionSelecctor";
import questionsModule from "../../modules/questionsModule";

import CreateQuestionButton from "../../components/CreateQuestionButton";
import ContributionCalendar from "../../components/ContributionCalendar";

const Home = () => {
  const history = useHistory();
  const questions = useSelector(questionsSelector);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [index, setIndex] = useState(null);

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
        <IonListHeader>質問一覧</IonListHeader>
        {questions.map(({ title, tags, answer }, key) => {
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
                      <IonChip color="tertiary">回答済み</IonChip>
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
                  console.log(key, index);
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
          <IonTitle>miraeru</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <CreateQuestionButton />
        <div className="ion-padding">
          <ContributionCalendar questions={questions} />
        </div>
        <QuestionList />
        <Alert />
      </IonContent>
    </IonPage>
  );
};

export default Home;
