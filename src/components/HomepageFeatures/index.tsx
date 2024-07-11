import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>This documentation site is designed to make customizing your showroom and capturing the best shots effortless. Whether you're new to photography or an experienced photographer, the intuitive interface ensures that you can navigate and use the features with ease.</>,
  },
  {
    title: "Focus on What Matters",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>With easy-to-use tools, changing light colors, adjusting lighting conditions, and modifying range is a breeze. You can also customize object visibility to create the perfect scene for your photos.</>,
  },
  {
    title: "SteelRacing's Essence",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        The documentation provides everything you need to make the most of your showroom.
        It caters to all skill levels, offering valuable insights and advanced techniques to help you create stunning,
        unique photo shots effortlessly.
      </>
    )
  },
]

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
