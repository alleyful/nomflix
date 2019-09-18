import React from 'react';
import YouTube from 'react-youtube';
import styled from 'styled-components';

const Container = styled.div`

`;

const PlayTitle = styled.h1`
	font-size: 20px;
	margin-top: 30px;
`;

const PlayList = styled.ul`
	padding: 20px 0 30px 0;
`;

const PlayItem = styled.li`
	width: 400px;
	display: inline-block;
	margin: 0 10px 10px 0;
`;

const opts = {
	height: '227',
	width: '400',
	playerVars: {
		autoplay: 0,
		rel: 0
	}
};

const Video = ({videos}) => (
	<Container>
		<PlayTitle>Videos</PlayTitle>
		<PlayList>
			{videos.map(v => (
				<PlayItem key={v.id}>
					<YouTube videoId={v.key}
					         opts={opts} />
				</PlayItem>
			))}
		</PlayList>
	</Container>
);

export default Video;