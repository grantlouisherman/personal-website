import React from "react";
import { IonThumbnail, IonImg, IonItem } from "@ionic/react";

import { IconProps } from '../utils';

const Icon: React.FC<IconProps> = ({key, link, icon}:IconProps) => {

  return (
    <>
      <IonItem>
        <IonThumbnail class="thumbnail" slot="start">
          <a href={link}>
          <IonImg src={icon} />
          </a>
        </IonThumbnail>
      </IonItem>
    </>
  );
};

export default Icon;
