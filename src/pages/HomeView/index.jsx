import useStyles from './styles';

const HomeView = () => {
  const classes = useStyles();
  return (
    <div className={classes.textContainer}>
      <h2 className={classes.title}>Welcome to Phonebook</h2>
      <p className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        excepturi fuga soluta ullam maxime, dolore totam nihil officiis aut
        quasi voluptatum enim assumenda suscipit amet temporibus, illo vel qui
        labore!
      </p>
    </div>
  );
};

export default HomeView;
