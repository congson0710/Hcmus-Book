import React from 'react';
import { Grid, Menu, Loader } from 'semantic-ui-react';
import Slider from 'react-slick';

import PostCard from './PostCard';
import BookCard from './BookCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Home = props => {
  return (
    <div className="container">
      <div className="col-lg-10 col-lg-offset-1">
        <Slider {...settings}>
          <div>
            <img
              className="img-responsive"
              src="https://dbader.org/static/figures/python-tricks-launch-faq.jpg"
              alt="doan"
            />
          </div>
          <div>
            <img
              className="img-responsive"
              src="http://thumbnails.cbsig.net/CBS_Production_Simon_and_Schuster_VMS/386/43/119c15e9-92e5-44f2-8a6d-5923adb5411e_1506607772457_HighRes.png"
              alt="doan"
            />
          </div>
          <div>
            <img
              className="img-responsive"
              src="https://www.artsfon.com/pic/201411/1920x1080/artsfon.com-31677.jpg"
              alt="doan"
            />
          </div>
          <div>
            <img
              className="img-responsive"
              src="https://www.genoutcry.com/wp-content/uploads/2017/10/Warcry-Banner.jpg?x64933"
              alt="doan"
            />
          </div>
          <div>
            <img
              className="img-responsive"
              src="https://cdnb.artstation.com/p/assets/images/images/008/262/813/large/francesco-yoshi-gobbo-joy-cover.jpg?1511573310"
              alt="doan"
            />
          </div>
        </Slider>

        <Menu pointing secondary>
          <Menu.Item
            content="Sách mới"
            name="book"
            active={props.activeItem === 'book'}
            onClick={props.handleItemClick}
          />
          <Menu.Item
            content="Mua/bán sách cũ"
            name="post"
            active={props.activeItem === 'post'}
            onClick={props.handleItemClick}
          />
        </Menu>
        {props.currentMenu === 'post' ? (
          props.homePost.isLoading ? (
            <Loader active content="Loading" size="large" />
          ) : (
            <Grid columns="4" style={{ marginLeft: `4px` }}>
              {props.homePost.posts.map(row => (
                <Grid.Row key={Math.random()}>
                  {row.map(post => (
                    <Grid.Column key={Math.random()}>
                      <PostCard post={post} />
                    </Grid.Column>
                  ))}
                </Grid.Row>
              ))}
            </Grid>
          )
        ) : props.homeBook.isLoading ? (
          <Loader active content="Loading" size="large" />
        ) : (
          <Grid columns="4" style={{ marginLeft: `4px` }}>
            {props.homeBook.books.map(row => (
              <Grid.Row key={Math.random()}>
                {row.map(book => (
                  <Grid.Column key={Math.random()}>
                    <BookCard book={book} />
                  </Grid.Column>
                ))}
              </Grid.Row>
            ))}
          </Grid>
        )}
      </div>
    </div>
  );
};

export default Home;
