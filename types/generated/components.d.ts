import type { Attribute, Schema } from '@strapi/strapi';

export interface CityPolicyAnswerPolicyAnswer extends Schema.Component {
  collectionName: 'components_city_policy_answer_policy_answers';
  info: {
    description: '';
    displayName: 'Policy Answer';
    icon: 'quote';
  };
  attributes: {
    answer: Attribute.RichText;
    city: Attribute.Enumeration<
      [
        'Blainville',
        'Brossard',
        'Ch\u00E2teauguay',
        'Laval',
        'Longueuil',
        'Mascouche',
        'Mirabel',
        'Montr\u00E9al',
        'Repentigny',
        'Saint-J\u00E9r\u00F4me',
        'Terrebonne'
      ]
    > &
      Attribute.Required;
    politicalParty: Attribute.Enumeration<
      [
        'Action Citoyens Blainville',
        'Vrai Blainville',
        'Brossard Ensemble',
        'Vision Brossard',
        'Alliance Ch\u00E2teauguay',
        'Parti Laval',
        'Mouvement Lavallois',
        'Action Laval',
        'Coalition Longueuil',
        'Agora Longueuil',
        'Option Alliance',
        'Vision D\u00E9mocratique de Mascouche',
        'Mouvement Citoyen Mirabel',
        'Action Mirabel',
        'Projet Montr\u00E9al',
        'Ensemble Montr\u00E9al',
        'Transition Montr\u00E9al',
        'Futur Montr\u00E9al',
        'Action Montr\u00E9al',
        'Repentigny Ensemble',
        'Avenir Repentigny',
        'Mouvement J\u00E9r\u00F4mien',
        'Avenir Saint-J\u00E9r\u00F4me',
        'Mouvement Terrebonne'
      ]
    > &
      Attribute.Required;
  };
}

export interface PresentationKeyPoint extends Schema.Component {
  collectionName: 'components_presentation_key_points';
  info: {
    description: '';
    displayName: 'Key Point';
    icon: 'arrow-circle-right';
  };
  attributes: {
    color: Attribute.Enumeration<['gray', 'blue', 'red', 'green', 'indigo']> &
      Attribute.Required &
      Attribute.DefaultTo<'gray'>;
    content: Attribute.RichText &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    icon: Attribute.Media<'images'>;
    title: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'city-policy-answer.policy-answer': CityPolicyAnswerPolicyAnswer;
      'presentation.key-point': PresentationKeyPoint;
    }
  }
}
