import CertificationBlock from '../components/widget/certification-block/certification-block';
import EducationBlock from '../components/widget/education-block/education-block';
import ExperienceBlock from '../components/widget/experience-block/experience-block';
import { WidgetImage } from '../components/widget/image/image';
import { SyntaxHighlighter } from '../components/widget/syntax-highlighter/syntax-highlighter';
import { WidgetVideo } from '../components/widget/video/video';

export const widgetComponents = {
  ExperienceBlock,
  CertificationBlock,
  EducationBlock,
  WidgetImage,
  WidgetVideo,
  pre: SyntaxHighlighter,
};
