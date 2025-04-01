import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksBannerSection extends Struct.ComponentSchema {
  collectionName: 'components_blocks_banner_sections';
  info: {
    description: '';
    displayName: 'Banner Section';
  };
  attributes: {
    headdin: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
  };
}

export interface BlocksInfoBlock extends Struct.ComponentSchema {
  collectionName: 'components_blocks_info_blocks';
  info: {
    description: '';
    displayName: 'Info Block';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    cta: Schema.Attribute.Component<'elements.link', false>;
    icon: Schema.Attribute.Media<'images'>;
    image: Schema.Attribute.Media<'images'>;
    reversed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    description: '';
    displayName: 'Card';
  };
  attributes: {
    date: Schema.Attribute.Date;
    description: Schema.Attribute.RichText;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsCardSection extends Struct.ComponentSchema {
  collectionName: 'components_elements_card_sections';
  info: {
    description: '';
    displayName: 'CardSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    reverse: Schema.Attribute.Boolean;
    text: Schema.Attribute.Component<'elements.list', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsFaq extends Struct.ComponentSchema {
  collectionName: 'components_elements_faqs';
  info: {
    displayName: 'Faq';
  };
  attributes: {
    description: Schema.Attribute.RichText;
    heading: Schema.Attribute.Text;
  };
}

export interface ElementsFaqData extends Struct.ComponentSchema {
  collectionName: 'components_elements_faq_data';
  info: {
    displayName: 'Faq-data';
  };
  attributes: {
    faqData: Schema.Attribute.Component<'elements.faq', true>;
    image: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.Text;
  };
}

export interface ElementsImages extends Struct.ComponentSchema {
  collectionName: 'components_elements_images';
  info: {
    description: '';
    displayName: 'Images';
  };
  attributes: {
    image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsList extends Struct.ComponentSchema {
  collectionName: 'components_elements_lists';
  info: {
    description: '';
    displayName: 'list';
  };
  attributes: {
    list: Schema.Attribute.Text;
  };
}

export interface ElementsLogo extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logo';
  };
  attributes: {
    image: Schema.Attribute.Media<'images'>;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    description: Schema.Attribute.Text;
    link: Schema.Attribute.Component<'elements.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeader extends Struct.ComponentSchema {
  collectionName: 'components_layout_headers';
  info: {
    displayName: 'Header';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', true>;
    logo: Schema.Attribute.Component<'elements.logo', false>;
    navigation: Schema.Attribute.Component<'elements.link', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.banner-section': BlocksBannerSection;
      'blocks.info-block': BlocksInfoBlock;
      'elements.card': ElementsCard;
      'elements.card-section': ElementsCardSection;
      'elements.faq': ElementsFaq;
      'elements.faq-data': ElementsFaqData;
      'elements.images': ElementsImages;
      'elements.link': ElementsLink;
      'elements.list': ElementsList;
      'elements.logo': ElementsLogo;
      'layout.footer': LayoutFooter;
      'layout.header': LayoutHeader;
    }
  }
}
