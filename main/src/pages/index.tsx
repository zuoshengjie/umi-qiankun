import { MicroAppWithMemoHistory } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <MicroAppWithMemoHistory name="app1" url='/' />
      <MicroAppWithMemoHistory name="app2" url='/' />

    </div>
  );
}
