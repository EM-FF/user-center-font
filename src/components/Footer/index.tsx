import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import { useIntl } from 'umi';

const Footer: React.FC = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
    defaultMessage: 'FNHAH-first-project',
  });

  const currentYear = new Date().getFullYear();

  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'ownerBlog',
          title: '个人博客',
          href: 'http://em-ff.github.io',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />em-ff github</>,
          href: 'https://github.com/em-ff',
          blankTarget: true,
        },
        {
          key: 'planet',
          title: '知识星球',
          href: 'https://wx.zsxq.com',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
