import React from 'react';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

export default function NotFound({}) {
  return (
    <BannerMainContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            <strong>
              OPS... ALGO DEU ERRADO!
            </strong>
          </ContentAreaContainer.Title>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
