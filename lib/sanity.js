/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createPreviewSubscriptionHook, createCurrentUserHook } from 'next-sanity';
import { PortableText as PortableTextComponent } from '@portabletext/react';
import createImageUrlBuilder from '@sanity/image-url';

import { config } from './config';

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}

/**
 * Set up a helper function for generating Image URLs with only the asset reference data in your documents.
 * Read more: https://www.sanity.io/docs/image-url
 * */
export const imageBuilder = createImageUrlBuilder(config);

export const urlForImage = (source) => imageBuilder.image(source).auto('format').fit('max');

// Set up the live preview subscription hook
export const usePreviewSubscription = createPreviewSubscriptionHook(config);

// Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);

// Set up Portable Text serialization

export const PortableText = (props) => (
  <PortableTextComponent
    // eslint-disable-next-line react/destructuring-assignment
    value={props.value}
    components={{
      types: {
        // eslint-disable-next-line no-shadow
        code: (node) => (
          <pre data-language={node.language}>
            <code>{node.code}</code>
          </pre>
        ),
      },
    }}
    {...props}
  />
);
