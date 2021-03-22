import Article from '../Article/Article';
import Video from '../Video/Video';
import WithLightBlock from '../WithLightBlock/WithLightBlock';
import PropTypes from 'prop-types';

const WithLightVideo = WithLightBlock(Video);
const WithLightArticle = WithLightBlock(Article);

function List(props) {
    return props.list.map((item, index) => {
        switch (item.type) {
            case 'video':
                return (
                    <WithLightVideo key={index} {...item} />
                );

            case 'article':
                return (
                    <WithLightArticle key={index} {...item} />
                );

            default:
                return null
        }
    });
};

List.propTypes = {
    props: PropTypes.array
}

export default List