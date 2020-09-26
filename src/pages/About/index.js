import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFooter,
  IonHeader,
  IonPage,
  IonText,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";

const About = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>miraeruについて</IonTitle>
          <IonButtons slot="start">
            <IonBackButton text="戻る" defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <p className="ion-text-center">
          <IonText color="primary">未来</IonText>のあなたが教
          <IonText color="primary">える</IonText>学習補助アプリ
        </p>
        <h1 className="ion-text-center">
          <IonText color="primary">miraeru</IonText>
        </h1>
        <div className="ion-padding-top" />
        <h2>
          <IonText color="primary">miraeru</IonText>の使い方
        </h2>
        <p>まず、Qボタンを押して、質問画面に行きます。</p>
        <p>
          そこで、質問のタイトル、質問文、あと必要であればタグを追加して質問を作成します。
        </p>
        <p></p>
      </IonContent>
      <IonFooter>
        <IonToolbar>
          <IonTitle className="ion-text-center">&copy; f-maple</IonTitle>
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};

export default About;
