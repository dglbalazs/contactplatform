"use client";
import Icon from "@/app/components/Utility/Icon";
import Text from "@/app/components/Utility/Text";
import styles from "./More.module.scss"

const More = () => {

    return (
        <div className={styles.wrapper}>
            <div className={styles.option}>
                <Icon iconname="Settings"></Icon>
                <Text text="Edit" texttype={5} clr={1}></Text>
            </div>
            <div className={styles.option}>
                <Icon iconname="Fav"></Icon>
                <Text text="Favourite" texttype={5} clr={1}></Text>
            </div>
            <div className={styles.option}>
                <Icon iconname="Delete"></Icon>
                <Text text="Remove" texttype={5} clr={1}></Text>
            </div>
        </div>
    )
}

export default More;