import type { Schema, Struct } from '@strapi/strapi';

export interface LayoutContactList extends Struct.ComponentSchema {
  collectionName: 'components_layout_contact_lists';
  info: {
    description: '';
    displayName: 'ContactList';
    icon: 'arrowDown';
  };
  attributes: {
    address: Schema.Attribute.String;
    company: Schema.Attribute.String;
    email: Schema.Attribute.String;
    mapUrl: Schema.Attribute.String;
    phone: Schema.Attribute.String;
  };
}

export interface LayoutFaq extends Struct.ComponentSchema {
  collectionName: 'components_layout_faqs';
  info: {
    displayName: 'FAQ';
    icon: 'layer';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface LayoutHeadingText extends Struct.ComponentSchema {
  collectionName: 'components_layout_heading_texts';
  info: {
    description: '';
    displayName: 'HeadingText';
    icon: 'filter';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHeadingTextIcon extends Struct.ComponentSchema {
  collectionName: 'components_layout_heading_text_icons';
  info: {
    displayName: 'HeadingTextIcon';
    icon: 'check';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    icon: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LayoutHomeBlock extends Struct.ComponentSchema {
  collectionName: 'components_layout_home_blocks';
  info: {
    displayName: 'HomeBlock';
    icon: 'apps';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    linkText: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface LayoutProductOeMs extends Struct.ComponentSchema {
  collectionName: 'components_layout_product_oe_ms';
  info: {
    description: '';
    displayName: 'ProductOEMs';
    icon: 'apps';
  };
  attributes: {
    title: Schema.Attribute.String;
  };
}

export interface LayoutProductTable extends Struct.ComponentSchema {
  collectionName: 'components_layout_product_tables';
  info: {
    displayName: 'ProductTable';
    icon: 'apps';
  };
  attributes: {
    method: Schema.Attribute.String;
    property: Schema.Attribute.String;
    value: Schema.Attribute.String;
  };
}

export interface LayoutTextImage extends Struct.ComponentSchema {
  collectionName: 'components_layout_text_images';
  info: {
    displayName: 'TextImage';
    icon: 'picture';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'videos'>;
    title: Schema.Attribute.String;
  };
}

export interface LayoutTopBanner extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_banners';
  info: {
    description: '';
    displayName: 'TopBanner';
    icon: 'play';
  };
  attributes: {
    mobileBanner: Schema.Attribute.Media<'images'>;
    subTitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
    webBanner: Schema.Attribute.Media<'images'>;
  };
}

export interface SeoProductReview extends Struct.ComponentSchema {
  collectionName: 'components_seo_product_reviews';
  info: {
    description: '';
    displayName: 'ProductReview';
    icon: 'star';
  };
  attributes: {
    author: Schema.Attribute.String;
    bestRating: Schema.Attribute.Decimal &
      Schema.Attribute.SetMinMax<
        {
          max: 5;
          min: 2;
        },
        number
      >;
    datePublished: Schema.Attribute.Date;
    reviewBody: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SeoProductSchema extends Struct.ComponentSchema {
  collectionName: 'components_seo_product_schemas';
  info: {
    description: '';
    displayName: 'productSchema';
    icon: 'doctor';
  };
  attributes: {
    gtin8: Schema.Attribute.String;
    mpn: Schema.Attribute.String;
    offerCount: Schema.Attribute.Integer;
    reviews: Schema.Attribute.Component<'seo.product-review', true>;
    sku: Schema.Attribute.String;
  };
}

export interface SeoSchemaList extends Struct.ComponentSchema {
  collectionName: 'components_seo_schema_lists';
  info: {
    displayName: 'SchemaList';
    icon: 'server';
  };
  attributes: {
    code: Schema.Attribute.Text;
    name: Schema.Attribute.String;
  };
}

export interface SeoSeoInfomation extends Struct.ComponentSchema {
  collectionName: 'components_seo_seo_infomations';
  info: {
    description: '';
    displayName: 'seoInfomation';
    icon: 'search';
  };
  attributes: {
    canonicalLinks: Schema.Attribute.String;
    preventIndexing: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
    schema: Schema.Attribute.Component<'seo.schema-list', true>;
    seoDesctiption: Schema.Attribute.Text;
    seoTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'layout.contact-list': LayoutContactList;
      'layout.faq': LayoutFaq;
      'layout.heading-text': LayoutHeadingText;
      'layout.heading-text-icon': LayoutHeadingTextIcon;
      'layout.home-block': LayoutHomeBlock;
      'layout.product-oe-ms': LayoutProductOeMs;
      'layout.product-table': LayoutProductTable;
      'layout.text-image': LayoutTextImage;
      'layout.top-banner': LayoutTopBanner;
      'seo.product-review': SeoProductReview;
      'seo.product-schema': SeoProductSchema;
      'seo.schema-list': SeoSchemaList;
      'seo.seo-infomation': SeoSeoInfomation;
    }
  }
}
