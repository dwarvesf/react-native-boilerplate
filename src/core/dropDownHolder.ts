type AlertType = 'info' | 'warn' | 'error' | 'success';

export type DropdownType = {
  alertWithType: (type: AlertType, title: string, message: string) => void;
};

export class DropDownHolder {
  static dropDown: any;
  static onClose: any;
  static latestAlert: any;

  static setDropDown(dropDown: any) {
    this.dropDown = dropDown;
  }

  static closeCurrentAlert() {
    if (typeof this.dropDown?.closeAction === 'function') {
      this.dropDown.closeAction();
    }
  }

  static setOnClose(onClose: any) {
    this.onClose = onClose;
  }

  static invokeOnClose() {
    this.latestAlert = null;
    if (typeof this.onClose === 'function') {
      this.onClose();
    }
  }

  static closeAction() {
    if (typeof this.dropDown?.closeAction === 'function') {
      this.dropDown.closeAction();
    }
  }

  static alert(type: AlertType, title: string, message: string) {
    this.dropDown.alertWithType(type, title, message);
  }
}
