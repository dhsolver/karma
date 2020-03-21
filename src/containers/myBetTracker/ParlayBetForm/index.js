import { isMobile } from 'react-device-detect';
import WebForm from './web';
import MobileForm from './mobile';

const form = isMobile ? MobileForm : WebForm;

export default form;
