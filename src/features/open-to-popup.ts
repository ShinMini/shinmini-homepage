export const openToPopup = (link: string) => {
  try {
    window.open(link, '_blank');
    return;
  } catch (e) {
    if (e instanceof DOMException) {
      return alert('팝업이 차단되었습니다. 팝업을 허용해주세요.');
    }
    throw e;
  }
};
