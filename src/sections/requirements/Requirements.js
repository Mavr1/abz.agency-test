import React from 'react';
import ButtonMobile from '../../components/buttonMobile/ButtonMobile';
import styles from './styles.module.scss';

const Requirements = () => {
  return (
    <section className={styles.requirements}>
      <div className="container">
        <h2 className={styles.title}>
          Test assignment for Frontend Developer position
        </h2>
        <p className={styles.description}>
          We kindly remind you that your test assignment should be submitted as
          a link to github/bitbucket repository.
        </p>
        <ButtonMobile title={'Sing up now'} />
      </div>
    </section>
  );
};

export default Requirements;
