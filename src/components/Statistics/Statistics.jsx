import PropTypes from 'prop-types';
import {
  Section,
  Title,
  List,
  Item,
  Percentage,
} from '../Statistics/Statistics.styled';
import getRandomHexColor from '../../utils/randomColor';

export const Statistics = ({ title, data }) => {
  return (
    <Section>
      {title && <Title class="title">{title}</Title>}

      <List>
        {data.map(({ id, label, percentage }) => {
          let bgColor = getRandomHexColor();

          return (
            <Item key={id} style={{ backgroundColor: `${bgColor}` }}>
              <span>{label}</span>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.string.isRequired,
  }),
};
