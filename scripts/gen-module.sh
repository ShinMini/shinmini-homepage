clear
NOW=$(date +"%m-%d-%Y %H:%M:%S")
echo -e "Module name: "
read name

SOURCEDIR="src/modules/$name" #
echo "$SOURCEDIR"
mkdir "$SOURCEDIR"
chmod -R 777 "$SOURCEDIR"

upper_name=""
upper_all_name=""
if [[ $name == *"-"* ]]; then
  IFS='-' # hyphen (-) is set as delimiter
  read -ra ADDR <<< "$name" # str is read into an array as tokens separated by IFS
  for i in "${ADDR[@]}"; do # access each element of array
    echo "${i}"
    upper_tmp="$(tr '[:lower:]' '[:upper:]' <<< "${i:0:1}")${i:1}"
    upper_all_tmp="$(tr '[:lower:]' '[:upper:]' <<< "$i")"
    upper_name=${upper_name}${upper_tmp}
    if [ "$upper_all_name" == "" ]; then
      upper_all_name="${upper_all_name}${upper_all_tmp}"
    else
      upper_all_name="${upper_all_name}_${upper_all_tmp}"
    fi

  done
  IFS=' ' #
else
  upper_name="$(tr '[:lower:]' '[:upper:]' <<< "${name:0:1}")${name:1}"
  upper_all_name="$(tr '[:lower:]' '[:upper:]' <<< "$name")"
fi

upper_name_screen="${upper_name}"Screen

# Generate folder View
echo 'Start folder View'
mkdir "$SOURCEDIR/views"
mkdir "$SOURCEDIR/views/components"
touch "$SOURCEDIR/views/$upper_name_screen.tsx"

echo "import { RouteProp } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import { Header, Text } from 'components';
import { useSetting } from 'contexts/SettingProvider';
import { RootNavigatorParamList } from 'modules/navigation/typings';

interface $upper_name"RouteProps" {
    route: RouteProp<RootNavigatorParamList, '$upper_name_screen'>;
}

interface $upper_name"StateProps" {}

interface $upper_name"DispatchProps" {}

type $upper_name"ScreenProps" = $upper_name"RouteProps" & $upper_name"StateProps" & $upper_name"DispatchProps";

const $upper_name_screen = (props: $upper_name"ScreenProps") => {
    const { t, theme } = useSetting();
    const styles = myStyles(theme);
    return (
        <View style={styles.fill}>
            <Header />
            <Text>$upper_name_screen</Text>
        </View>
    );
};

const myStyles = (theme: string) =>
    StyleSheet.create({
        fill: {
            flex: 1,
        },
    });

const mapStateToProps = (state: GlobalState) => ({});

const mapDispatchToProps: $upper_name"DispatchProps" = {};

export default connect<$upper_name"StateProps", $upper_name"DispatchProps">(mapStateToProps, mapDispatchToProps)($upper_name_screen);" >> "$SOURCEDIR/views/$upper_name_screen.tsx"
# src
mkdir "$SOURCEDIR/src/"
echo "export const routeName = {};" >> "$SOURCEDIR/src/api.ts"
# Translations
mkdir "$SOURCEDIR/translations/"
echo "{
    "\"$name"\": {}
}" >> "$SOURCEDIR/translations/en.json"
echo "{
    "\"$name"\": {}
}" >> "$SOURCEDIR/translations/ko.json"
# Translations
mkdir "$SOURCEDIR/typings/"
echo "declare namespace "${name}"Space {
}" >> "$SOURCEDIR/typings/index.d.ts"
# import Screen name
# SCREEN_NAME_PATH="src/routing/screen-name.ts"
# echo "export const ${upper_all_name}_SCREEN = '${upper_all_name}_SCREEN';" >> ${SCREEN_NAME_PATH}

sed -i '' '2i\'$'\n'"    ...require('modules/${name}/translations/en.json'),"$'\n' ./src/i18n/en/index.ts
sed -i '' '2i\'$'\n'"    ...require('modules/${name}/translations/ko.json'),"$'\n' ./src/i18n/ko/index.ts
sed -i '' '2i\'$'\n'"    $upper_name_screen: undefined;"$'\n' ./src/modules/navigation/typings/index.d.ts

echo "End Scripts"