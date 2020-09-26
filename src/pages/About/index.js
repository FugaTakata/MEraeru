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
          <IonTitle>
            <IonText color="primary">MEraeruについて</IonText>
          </IonTitle>
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
          <IonText color="primary">MEraeru</IonText>
        </h1>
        <div className="ion-padding-vertical" />
        <h2>
          <IonText color="primary">MEraeru</IonText>の使い方
        </h2>
        <h3 className="ion-padding-top">
          <IonText color="secondary">質問の作成</IonText>
        </h3>
        <p>Qボタンで質問作成画面に移動できます。</p>
        <p>
          タイトル、質問文、あとは必要であればタグを入力して質問を作成します。
        </p>

        <h3 className="ion-padding-top">
          <IonText color="secondary">回答の作成</IonText>
        </h3>
        <p>質問詳細画面で回答を入力しましょう。</p>

        <h3 className="ion-padding-top">
          <IonText color="secondary">回答の編集</IonText>
        </h3>
        <p>ホーム画面で質問を左から右にスワイプすると、編集を行えます。</p>

        <IonText color="secondary">
          <h3 className="ion-padding-top">質問の削除</h3>
        </IonText>
        <p>
          解決できなかった質問を削除することは、
          <IonText color="danger">おすすめしません</IonText>
          。失敗から学べることもあります。
        </p>
        <p>
          どうしても削除したい場合は、ホーム画面で質問を右から左にスワイプすると、削除を行えます。
        </p>

        <div className="ion-padding-vertical" />
        <h2>
          <IonText color="primary">MEraeru</IonText>で力をつける方法
        </h2>
        <h3 className="ion-padding-top">
          <IonText color="secondary">質問はわかりやすく</IonText>
        </h3>
        <p>
          質問を作成する際に、何が理解できなくて、それをどうしたいのかを意識して質問するようにしましょう。
        </p>
        <p>そうすることで、問題点をより詳しく把握できます。</p>

        <h3 className="ion-padding-top">
          <IonText color="secondary">調べるのは自分の力で</IonText>
        </h3>
        <p>わからないから、すぐに誰かにきく。間違いではありません。</p>
        <p>
          しかし、自分の力で
          <IonText color="secondary">
            自走（自分に必要なことを学び、それを使いこなすこと）
          </IonText>
          しなければ、レベルアップが遅れてしまいます。
        </p>

        <h3 className="ion-padding-top">
          <IonText color="secondary">どうしてもわかんない</IonText>
        </h3>
        <p>一度休憩しましょう。</p>
        <p>私もプログラミングで詰まってしまった時は、その日はやめて寝ます。</p>
        <p>次の日にまたやると、すんなり理解できたりします。</p>
        <p>
          それでもダメなら、
          <ul>
            <li>何が問題なのか</li>
            <li>どうしてできないのか</li>
            <li>最終的にどうしたいのか</li>
          </ul>
          を<IonText color="danger">事前に</IonText>
          まとめて、誰かに質問に行きましょう。
        </p>

        <div className="ion-padding-vertical" />
        <h2>
          <IonText color="primary">さいごに</IonText>
        </h2>
        <p>このアプリがみなさんのお役に立てたら、嬉しいです。</p>
        <p>
          バグや、感想は
          <p>
            Twitter: <IonText color="primary">@maple__f</IonText>
          </p>
          (_は2つ)にご連絡いただけると幸いです。返せなかったらごめんね。
        </p>
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
