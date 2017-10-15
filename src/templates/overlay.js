import trimMultiLine from 'app/scripts/util/trimMultiLine';
import styles from 'app/styles/overlay.scss';

const template = (data) => {
  const markup = `
    <div id="minr_overlay-container">
      <style scoped>
        ${styles}
      </style>
        <div>Your browser is being used to mine cryptocurrency!</div>
        <div><span id="name">${data.minerName}</span> is running in this tab.</div>
    </div>
  `;

  return trimMultiLine(markup);
};

export default template;
