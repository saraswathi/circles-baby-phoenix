import Clipboard from 'clipboard';
import PropTypes from 'prop-types';
import React, { createRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ButtonPrimary from '~/components/ButtonPrimary';
import notify from '~/store/notifications/actions';

const ClipboardButton = (props, context) => {
  const dispatch = useDispatch();
  const ref = createRef();

  const initializeClipboard = () => {
    const clipboard = new Clipboard(ref.current, {
      text: () => {
        return props.text;
      },
    });

    clipboard.on('success', () => {
      dispatch(
        notify({
          text: context.t('ClipboardButton.copiedMessage'),
        }),
      );
    });

    return () => {
      clipboard.destroy();
    };
  };

  useEffect(initializeClipboard, [props.text]);

  return <ButtonPrimary ref={ref}>{props.children}</ButtonPrimary>;
};

ClipboardButton.contextTypes = {
  t: PropTypes.func.isRequired,
};

ClipboardButton.propTypes = {
  children: PropTypes.any.isRequired,
  text: PropTypes.string.isRequired,
};

export default ClipboardButton;
