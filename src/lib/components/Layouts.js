import arabic from "../layouts/arabic";
import assamese from "../layouts/assamese";
import burmese from "../layouts/burmese";
import chinese from "../layouts/chinese";
import czech from "../layouts/czech";
import english from "../layouts/english";
import farsi from "../layouts/farsi";
import french from "../layouts/french";
import georgian from "../layouts/georgian";
import german from "../layouts/german";
import gilaki from "../layouts/gilaki";
import greek from "../layouts/greek";
import hebrew from "../layouts/hebrew";
import hindi from "../layouts/hindi";
import italian from "../layouts/italian";
import japanese from "../layouts/japanese";
import kannada from "../layouts/kannada";
import korean from "../layouts/korean";
import nigerian from "../layouts/nigerian";
import polish from "../layouts/polish";
import russian from "../layouts/russian";
import sindhi from "../layouts/sindhi";
import spanish from "../layouts/spanish";
import swedish from "../layouts/swedish";
import thai from "../layouts/thai";
import turkish from "../layouts/turkish";
import ukrainian from "../layouts/ukrainian";
import urdu from "../layouts/urdu";
import uyghur from "../layouts/uyghur";

class SimpleKeyboardLayouts {
  layouts = {
    arabic,
    assamese,
    burmese,
    chinese,
    czech,
    english,
    farsi,
    french,
    georgian,
    german,
    gilaki,
    greek,
    hebrew,
    hindi,
    italian,
    japanese,
    kannada,
    korean,
    nigerian,
    polish,
    russian,
    sindhi,
    spanish,
    swedish,
    thai,
    turkish,
    ukrainian,
    urdu,
    uyghur
  };

  get = layout => (layout ? this.layouts[layout] : this.layouts);
}

export default SimpleKeyboardLayouts;
