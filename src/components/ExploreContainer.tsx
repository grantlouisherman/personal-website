import React from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent
} from "@ionic/react";

import Card from './Card';
import Icon from './Icon';
import { contributions, CardProps, personelLinksLayout, IconProps} from '../utils';
import "./ExploreContainer.css";

interface ContainerProps {}
const ContributionsMap = (contribution: CardProps) => {
  const { title, cardContent, Projects } = contribution;
  return (
    <IonCol size="12">
      <Card title={title} cardContent={cardContent} Projects={Projects} />
    </IonCol>
  )
}

const IconsMap = (personalLink: IconProps) => {
  const { key, link, icon } = personalLink;
  return (
    <IonCol size="3">
      <Icon key={key} link={link} icon={icon} />
      <h4>{key}</h4>
    </IonCol>
  )
}
const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <IonContent class="container">
      <IonGrid>
        <IonRow>
        { personelLinksLayout.map(IconsMap)}
        </IonRow>
        <IonRow>
        { contributions.map(ContributionsMap)}
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default ExploreContainer;
