import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
} from "@ionic/react";

import { Contributions, CardProps } from '../utils';



const MapListItems = (project: Contributions, index: number) => {
  const { src, link, description } = project
  return (
    <IonItem key={`project.src${index}`}>
      <IonLabel>{src}</IonLabel>
      <IonLabel>{description}</IonLabel>
      <IonLabel><a href={link}>{link}</a></IonLabel>
    </IonItem>
  )
}

const Card: React.FC<CardProps> = ({ title, cardContent, Projects }: CardProps ) => (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle class="card-header">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{cardContent}</IonCardContent>
      <IonList>
      { Projects && Projects.map(MapListItems)}
      </IonList>
    </IonCard>
  );

Card.defaultProps = {
  title: 'Card',
  cardContent: 'Card content',
  Projects: []
};

export default Card;
