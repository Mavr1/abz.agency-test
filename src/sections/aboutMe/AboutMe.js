import React from 'react';
import { ReactComponent as ImageManLaptop } from '../../assets/man-laptop-v1.svg';
import ButtonMobile from '../../components/buttonMobile/ButtonMobile';
import styles from './styles.module.scss';

const AboutMe = () => {
  return (
    <section className={styles.aboutMe}>
      <div className="container">
        <h2 className={styles.title}>Let's get acquainted</h2>
        <ImageManLaptop className={styles.imageManLaptop} />
        <article className={styles.descriptionWrapper}>
          <h3 className={styles.subTitle}>I am cool frontend developer</h3>
          <p className={styles.description}>
            We will evaluate how clean your approach to writing CSS and
            Javascript code is. You can use any CSS and Javascript 3rd party
            libraries without any restriction.
          </p>
          <p className={styles.description}>
            If 3rd party css/javascript libraries are added to the project via
            bower/npm/yarn you will get bonus points. If you use any task runner
            (gulp/webpack) you will get bonus points as well. Slice service
            directory page P​SD mockup​ into HTML5/CSS3.
          </p>
        </article>
        <ButtonMobile title={'Sing up now'} invert />
      </div>
    </section>
  );
};

export default AboutMe;
