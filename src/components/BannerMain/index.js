import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoDescription,
  url,
  thanks
}) {
  const youTubeID = getYouTubeId(url);

  return (
    <BannerMainContainer>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>
          <ContentAreaContainer.Title>
            <strong>
              FELIZ ANIVERSÁRIO AMOR, VOCÊ MERECE O MUNDO!
            </strong>
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {videoDescription}
          </ContentAreaContainer.Description>
          <ContentAreaContainer.Description>
            {thanks}<br></br>
            <strong>MUITO OBRIGADO GALERA, VOCÊS SÃO DEMAIS!</strong>
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive
            youtubeID={youTubeID}
          />
          <WatchButton target='_blank' href={url}>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}
