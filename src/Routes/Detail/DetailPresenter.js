import React from 'react';
import { Route, Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import Loader from 'Components/Loader';
import Company from 'Components/Company';
import Country from 'Components/Country';
import Season from 'Components/Season';

const Container = styled.div`
	position: relative;
	height: calc(100vh - 50px);
	width: 100%;
	padding: 50px;
`;

const Backdrop = styled.div`
	position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
	display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
	width: 30%;
  background-image: url(${props => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  border-radius: 5px;
`;

const Data = styled.div`
	width: 70%;
	margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;

const Overview = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const SLink = styled.a`
	display: inline-block;
	padding: 3px 5px;
	background: #f5c519;
	color: #000;
	border-radius: 3px;
`;

const InsideMenu = styled.div`
  margin: 20px 0px;
`;

const List = styled.ul`
  display: flex;
`;

const TabItem = styled("li")`
  margin-right: 20px;
  text-transform: uppercase;
  font-weight: 600;
  border: 1px solid #fff;
  border-radius: 3px;
  background-color: ${props => (props.active ? "#fff" : "transparent")};
  color: ${props => (props.active ? "black" : "white")};
`;

const TabLink = styled(Link)`
	display: inline-block;
	padding: 7px 15px;
`;

const DetailPresenter = withRouter(({ result, loading, error, location: {pathname} }) => (
	loading ? <Loader/> : (
		<>
			<Helmet>
				<title>{`${result.title ? result.title : result.name}  | Alleyflix`}</title>
			</Helmet>
			<Container>
				<Backdrop bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}/>
				<Content>
					<Cover
						bgImage={
							result.poster_path
								? `https://image.tmdb.org/t/p/original${result.poster_path}`
								: require("../../assets/noPosterSmall.png")
						}
					/>
					<Data>
						<Title>
							{result.original_title
								? result.title
								: result.name}
						</Title>

						<ItemContainer>
							<Item>
								{result.release_date
									? result.release_date.substring(0, 4)
									: result.first_air_date.substring(0, 4)}
							</Item>
							<Divider>•</Divider>
							<Item>
								{result.runtime
									? result.runtime
									: result.episode_run_time[ 0 ]} min
							</Item>
							<Divider>•</Divider>
							<Item>
								{result.genres &&
								result.genres.map((genre, index) =>
									index === result.genres.length - 1
										? genre.name
										: `${genre.name} / `
								)}
							</Item>


							{result.imdb_id && (
								<>
									<Divider>•</Divider>
									<Item>
										<SLink href={`https://www.imdb.com/title/${result.imdb_id}`} target="_blank"><span>IMDB</span></SLink>
									</Item>
								</>
							)}

						</ItemContainer>

						<Overview>{result.overview}</Overview>

						<InsideMenu>
							<List>
								{pathname.match(/movie/) ? (
									<>
									<TabItem active={pathname === `/movie/${result.id}/company`}>
										<TabLink to={`/movie/${result.id}/company`}>Company</TabLink>
									</TabItem>
									<TabItem active={pathname === `/movie/${result.id}/country`}>
										<TabLink to={`/movie/${result.id}/country`}>Country</TabLink>
									</TabItem>
									</>
								) : (
									<>
										<TabItem active={pathname === `/show/${result.id}/company`}>
											<TabLink to={`/show/${result.id}/company`}>Company</TabLink>
										</TabItem>
										<TabItem active={pathname === `/show/${result.id}/country`}>
											<TabLink to={`/show/${result.id}/country`}>Country</TabLink>
										</TabItem>
										<TabItem active={pathname === `/show/${result.id}/season`}>
											<TabLink to={`/show/${result.id}/season`}>Season</TabLink>
										</TabItem>
									</>
								)}
							</List>
						</InsideMenu>
						<Route path="/movie/:id/company" render={(routeProps) => (<Company {...result} />)}/>
						<Route path="/movie/:id/country" render={(routeProps) => (<Country {...result} />)}/>
						<Route path="/show/:id/company" render={(routeProps) => (<Company {...result} />)}/>
						<Route path="/show/:id/country" render={(routeProps) => (<Country {...result} />)}/>
						<Route path="/show/:id/season" render={(routeProps) => (<Season {...result} />)}/>
					</Data>
				</Content>
			</Container>
		</>
	)
));

DetailPresenter.propTypes = {
	result: PropTypes.object,
	loading: PropTypes.bool.isRequired,
	error: PropTypes.string
};

export default DetailPresenter;