// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// Document Types
import siteConfig from './documents/siteConfig';
import project from './documents/project';
import about from './documents/about';
import route from './documents/route';

// Object Types
import mainImage from './objects/mainImage';
import contentBlock from './objects/contentBlock';
import keywords from './objects/keywords';
import cta from './objects/cta';
import simplePortableText from './objects/simplePortableText';
import portableText from './objects/portableText';
import internalLink from './objects/internalLink';
import link from './objects/link';
import embedHTML from './objects/embedHTML';
import figure from './objects/figure';
import address from './objects/address';
import contact from './documents/contact';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'solointerior',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed

  types: schemaTypes.concat([
    /* Your types here! */
    figure,
    internalLink,
    link,
    embedHTML,
    cta,
    siteConfig,
    project,
    mainImage,
    contentBlock,
    keywords,
    about,
    route,
    simplePortableText,
    portableText,
    address,
    contact
  ]),
})
