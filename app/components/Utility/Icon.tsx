import styles from './Icon.module.scss'

interface IconProps {
    iconname: 'Add' | 'Back' | 'Call' | 'Change' | 'Delete' | 'Fav' | 'Light' | 'More' | 'Mute' | 'Search' | 'Settings';
  }


const Icon: React.FC<IconProps> = ({ iconname }) => {

        switch (iconname) {
            case "Add":
                return (
                    <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="Add">
                            <path id="Vector" d="M11.25 18.75V12.75H5.25V11.25H11.25V5.25H12.75V11.25H18.75V12.75H12.75V18.75H11.25Z"/>
                        </g>
                    </svg>
                )
            case "Back":
                return (
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Back arrow">
                        <path id="Vector" d="M12 19.625L4.375 12L12 4.375L13.075 5.45L7.25 11.25H19.625V12.75H7.25L13.075 18.55L12 19.625Z"/>
                    </g>
                </svg>

                )
            case "Call":
                return (
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Call">
                        <path id="Vector" d="M8.55 20.5H5.3C4.8 20.5 4.375 20.325 4.025 19.975C3.675 19.625 3.5 19.2 3.5 18.7V12C3.5 10.8167 3.725 9.71267 4.175 8.688C4.625 7.66267 5.23333 6.76667 6 6C6.76667 5.23333 7.66267 4.625 8.688 4.175C9.71267 3.725 10.8167 3.5 12 3.5C13.1833 3.5 14.2873 3.725 15.312 4.175C16.3373 4.625 17.2333 5.23333 18 6C18.7667 6.76667 19.375 7.66267 19.825 8.688C20.275 9.71267 20.5 10.8167 20.5 12V18.7C20.5 19.2 20.325 19.625 19.975 19.975C19.625 20.325 19.2 20.5 18.7 20.5H15.45V13.425H19V12C19 10.05 18.3207 8.39567 16.962 7.037C15.604 5.679 13.95 5 12 5C10.05 5 8.396 5.679 7.038 7.037C5.67933 8.39567 5 10.05 5 12V13.425H8.55V20.5ZM7.05 14.925H5V18.7C5 18.7667 5.03333 18.8333 5.1 18.9C5.16667 18.9667 5.23333 19 5.3 19H7.05V14.925ZM16.95 14.925V19H18.7C18.7667 19 18.8333 18.9667 18.9 18.9C18.9667 18.8333 19 18.7667 19 18.7V14.925H16.95ZM16.95 14.925H19C19 14.925 18.9667 14.925 18.9 14.925C18.8333 14.925 18.7667 14.925 18.7 14.925H16.95ZM7.05 14.925H5.3C5.23333 14.925 5.16667 14.925 5.1 14.925C5.03333 14.925 5 14.925 5 14.925H7.05Z"/>
                    </g>
                </svg>

                )
            case "Change":
                return (
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Change">
                <path id="Vector" d="M15.65 5.0001L11.975 8.6501L10.925 7.6001L12.775 5.7501H12C10.2667 5.7501 8.79167 6.36243 7.575 7.5871C6.35833 8.81243 5.75 10.3001 5.75 12.0501C5.75 12.4668 5.796 12.8791 5.888 13.2871C5.97933 13.6958 6.11667 14.1001 6.3 14.5001L5.175 15.6251C4.875 15.0584 4.646 14.4751 4.488 13.8751C4.32933 13.2751 4.25 12.6668 4.25 12.0501C4.25 9.88343 5.00433 8.04176 6.513 6.5251C8.021 5.00843 9.85 4.2501 12 4.2501H12.775L10.925 2.4001L11.975 1.3501L15.65 5.0001ZM8.35 19.0001L12.025 15.3501L13.075 16.4001L11.225 18.2501H12C13.7333 18.2501 15.2083 17.6378 16.425 16.4131C17.6417 15.1878 18.25 13.7001 18.25 11.9501C18.25 11.5334 18.2043 11.1208 18.113 10.7121C18.021 10.3041 17.8833 9.9001 17.7 9.5001L18.825 8.3751C19.125 8.94176 19.3543 9.5251 19.513 10.1251C19.671 10.7251 19.75 11.3334 19.75 11.9501C19.75 14.1168 18.996 15.9584 17.488 17.4751C15.9793 18.9918 14.15 19.7501 12 19.7501H11.225L13.075 21.6001L12.025 22.6501L8.35 19.0001Z"/>
                </g>
                </svg>

                )
            case "Delete":
                return (
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Delete">
                <path id="Vector" d="M8.3 18.9998H15.7C15.7667 18.9998 15.8333 18.9665 15.9 18.8998C15.9667 18.8331 16 18.7665 16 18.6998V8.9998H8V18.6998C8 18.7665 8.03333 18.8331 8.1 18.8998C8.16667 18.9665 8.23333 18.9998 8.3 18.9998ZM5.625 6.2998V4.7998H8.6L9.6 3.7998H14.4L15.4 4.7998H18.375V6.2998H5.625ZM8.3 20.4998C7.8 20.4998 7.375 20.3248 7.025 19.9748C6.675 19.6248 6.5 19.1998 6.5 18.6998V7.4998H17.5V18.6998C17.5 19.1998 17.325 19.6248 16.975 19.9748C16.625 20.3248 16.2 20.4998 15.7 20.4998H8.3ZM8 18.9998H16C16 18.9998 15.9667 18.9998 15.9 18.9998C15.8333 18.9998 15.7667 18.9998 15.7 18.9998H8.3C8.23333 18.9998 8.16667 18.9998 8.1 18.9998C8.03333 18.9998 8 18.9998 8 18.9998Z"/>
                </g>
                </svg>

                )
            case "Fav":
                return (
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Favourite">
                <path id="Vector" d="M12 20.3249L10.875 19.3249C8.34167 17.0416 6.31233 15.0582 4.787 13.3749C3.26233 11.6916 2.5 9.9499 2.5 8.1499C2.5 6.73324 2.97933 5.54557 3.938 4.5869C4.896 3.6289 6.08333 3.1499 7.5 3.1499C8.3 3.1499 9.096 3.33724 9.888 3.7119C10.6793 4.08724 11.3833 4.69157 12 5.5249C12.6167 4.69157 13.321 4.08724 14.113 3.7119C14.9043 3.33724 15.7 3.1499 16.5 3.1499C17.9167 3.1499 19.104 3.6289 20.062 4.5869C21.0207 5.54557 21.5 6.73324 21.5 8.1499C21.5 9.9499 20.7373 11.6916 19.212 13.3749C17.6873 15.0582 15.6583 17.0416 13.125 19.3249L12 20.3249ZM12 18.2999C14.3833 16.1332 16.3127 14.2666 17.788 12.6999C19.2627 11.1332 20 9.61657 20 8.1499C20 7.1499 19.6667 6.31657 19 5.6499C18.3333 4.98324 17.5 4.6499 16.5 4.6499C15.7167 4.6499 14.9917 4.86657 14.325 5.2999C13.6583 5.73324 13.125 6.36657 12.725 7.1999H11.275C10.875 6.36657 10.3417 5.73324 9.675 5.2999C9.00833 4.86657 8.28333 4.6499 7.5 4.6499C6.5 4.6499 5.66667 4.98324 5 5.6499C4.33333 6.31657 4 7.1499 4 8.1499C4 9.61657 4.73767 11.1332 6.213 12.6999C7.68767 14.2666 9.61667 16.1332 12 18.2999Z"/>
                </g>
                </svg>

                )
            case "Light":
                return (
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Light mode">
                <path id="Vector" d="M12 15C12.8333 15 13.5417 14.7083 14.125 14.125C14.7083 13.5417 15 12.8333 15 12C15 11.1667 14.7083 10.4583 14.125 9.875C13.5417 9.29167 12.8333 9 12 9C11.1667 9 10.4583 9.29167 9.875 9.875C9.29167 10.4583 9 11.1667 9 12C9 12.8333 9.29167 13.5417 9.875 14.125C10.4583 14.7083 11.1667 15 12 15ZM12 16.5C10.75 16.5 9.68733 16.0627 8.812 15.188C7.93733 14.3127 7.5 13.25 7.5 12C7.5 10.75 7.93733 9.68733 8.812 8.812C9.68733 7.93733 10.75 7.5 12 7.5C13.25 7.5 14.3127 7.93733 15.188 8.812C16.0627 9.68733 16.5 10.75 16.5 12C16.5 13.25 16.0627 14.3127 15.188 15.188C14.3127 16.0627 13.25 16.5 12 16.5ZM2 12.75C1.78333 12.75 1.604 12.679 1.462 12.537C1.32067 12.3957 1.25 12.2167 1.25 12C1.25 11.7833 1.32067 11.604 1.462 11.462C1.604 11.3207 1.78333 11.25 2 11.25H4.25C4.46667 11.25 4.64567 11.3207 4.787 11.462C4.929 11.604 5 11.7833 5 12C5 12.2167 4.929 12.3957 4.787 12.537C4.64567 12.679 4.46667 12.75 4.25 12.75H2ZM19.75 12.75C19.5333 12.75 19.354 12.679 19.212 12.537C19.0707 12.3957 19 12.2167 19 12C19 11.7833 19.0707 11.604 19.212 11.462C19.354 11.3207 19.5333 11.25 19.75 11.25H22C22.2167 11.25 22.396 11.3207 22.538 11.462C22.6793 11.604 22.75 11.7833 22.75 12C22.75 12.2167 22.6793 12.3957 22.538 12.537C22.396 12.679 22.2167 12.75 22 12.75H19.75ZM12 5C11.7833 5 11.6043 4.929 11.463 4.787C11.321 4.64567 11.25 4.46667 11.25 4.25V2C11.25 1.78333 11.321 1.604 11.463 1.462C11.6043 1.32067 11.7833 1.25 12 1.25C12.2167 1.25 12.396 1.32067 12.538 1.462C12.6793 1.604 12.75 1.78333 12.75 2V4.25C12.75 4.46667 12.6793 4.64567 12.538 4.787C12.396 4.929 12.2167 5 12 5ZM12 22.75C11.7833 22.75 11.6043 22.6793 11.463 22.538C11.321 22.396 11.25 22.2167 11.25 22V19.75C11.25 19.5333 11.321 19.354 11.463 19.212C11.6043 19.0707 11.7833 19 12 19C12.2167 19 12.396 19.0707 12.538 19.212C12.6793 19.354 12.75 19.5333 12.75 19.75V22C12.75 22.2167 12.6793 22.396 12.538 22.538C12.396 22.6793 12.2167 22.75 12 22.75ZM6 7.05L4.75 5.825C4.6 5.675 4.529 5.49567 4.537 5.287C4.54567 5.079 4.61667 4.9 4.75 4.75C4.9 4.6 5.07933 4.525 5.288 4.525C5.496 4.525 5.675 4.6 5.825 4.75L7.05 6C7.2 6.15 7.275 6.325 7.275 6.525C7.275 6.725 7.2 6.9 7.05 7.05C6.91667 7.2 6.75 7.27067 6.55 7.262C6.35 7.254 6.16667 7.18333 6 7.05ZM18.175 19.25L16.95 18C16.8 17.85 16.725 17.675 16.725 17.475C16.725 17.275 16.8 17.1 16.95 16.95C17.0833 16.8 17.25 16.7293 17.45 16.738C17.65 16.746 17.8333 16.8167 18 16.95L19.25 18.175C19.4 18.325 19.471 18.504 19.463 18.712C19.4543 18.9207 19.3833 19.1 19.25 19.25C19.1 19.4 18.921 19.475 18.713 19.475C18.5043 19.475 18.325 19.4 18.175 19.25ZM16.95 7.05C16.8 6.91667 16.7293 6.75 16.738 6.55C16.746 6.35 16.8167 6.16667 16.95 6L18.175 4.75C18.325 4.6 18.5043 4.529 18.713 4.537C18.921 4.54567 19.1 4.61667 19.25 4.75C19.4 4.9 19.475 5.079 19.475 5.287C19.475 5.49567 19.4 5.675 19.25 5.825L18 7.05C17.85 7.2 17.675 7.275 17.475 7.275C17.275 7.275 17.1 7.2 16.95 7.05ZM4.75 19.25C4.6 19.1 4.525 18.9207 4.525 18.712C4.525 18.504 4.6 18.325 4.75 18.175L6 16.95C6.15 16.8 6.325 16.725 6.525 16.725C6.725 16.725 6.9 16.8 7.05 16.95C7.2 17.0833 7.271 17.25 7.263 17.45C7.25433 17.65 7.18333 17.8333 7.05 18L5.825 19.25C5.675 19.4 5.496 19.475 5.288 19.475C5.07933 19.475 4.9 19.4 4.75 19.25Z"/>
                </g>
                </svg>

                )
            case "More":
                return (
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="More">
                <path id="Vector" d="M6.2251 13.5C5.80843 13.5 5.45443 13.354 5.1631 13.062C4.8711 12.7707 4.7251 12.4167 4.7251 12C4.7251 11.5833 4.8711 11.2293 5.1631 10.938C5.45443 10.646 5.80843 10.5 6.2251 10.5C6.64176 10.5 6.9961 10.646 7.2881 10.938C7.57943 11.2293 7.7251 11.5833 7.7251 12C7.7251 12.4167 7.57943 12.7707 7.2881 13.062C6.9961 13.354 6.64176 13.5 6.2251 13.5ZM12.0001 13.5C11.5834 13.5 11.2294 13.354 10.9381 13.062C10.6461 12.7707 10.5001 12.4167 10.5001 12C10.5001 11.5833 10.6461 11.2293 10.9381 10.938C11.2294 10.646 11.5834 10.5 12.0001 10.5C12.4168 10.5 12.7708 10.646 13.0621 10.938C13.3541 11.2293 13.5001 11.5833 13.5001 12C13.5001 12.4167 13.3541 12.7707 13.0621 13.062C12.7708 13.354 12.4168 13.5 12.0001 13.5ZM17.7751 13.5C17.3584 13.5 17.0044 13.354 16.7131 13.062C16.4211 12.7707 16.2751 12.4167 16.2751 12C16.2751 11.5833 16.4211 11.2293 16.7131 10.938C17.0044 10.646 17.3584 10.5 17.7751 10.5C18.1918 10.5 18.5461 10.646 18.8381 10.938C19.1294 11.2293 19.2751 11.5833 19.2751 12C19.2751 12.4167 19.1294 12.7707 18.8381 13.062C18.5461 13.354 18.1918 13.5 17.7751 13.5Z"/>
                </g>
                </svg>

                )
            case "Mute":
                return (
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Mute">
                <path id="Vector" d="M4.2499 18.8748V17.3748H6.2499V10.1248C6.2499 9.8748 6.26657 9.64147 6.2999 9.4248C6.33324 9.20814 6.3749 8.99147 6.4249 8.7748L2.0249 4.3748L3.0999 3.3248L20.9249 21.1498L19.8749 22.2248L16.4999 18.8748H4.2499ZM17.7499 15.1498L16.2499 13.6498V10.1248C16.2499 8.94147 15.8332 7.93714 14.9999 7.1118C14.1666 6.28714 13.1666 5.8748 11.9999 5.8748C11.5332 5.8748 11.0709 5.9538 10.6129 6.1118C10.1542 6.27047 9.7499 6.4998 9.3999 6.7998L8.3249 5.7248C8.6749 5.4248 9.05824 5.17047 9.4749 4.9618C9.89157 4.7538 10.3166 4.5998 10.7499 4.4998V3.7998C10.7499 3.4498 10.8709 3.1538 11.1129 2.9118C11.3542 2.67047 11.6499 2.5498 11.9999 2.5498C12.3499 2.5498 12.6456 2.67047 12.8869 2.9118C13.1289 3.1538 13.2499 3.4498 13.2499 3.7998V4.4998C14.4999 4.78314 15.5626 5.43747 16.4379 6.4628C17.3126 7.48747 17.7499 8.70814 17.7499 10.1248V15.1498ZM11.9999 21.7998C11.4999 21.7998 11.0749 21.6248 10.7249 21.2748C10.3749 20.9248 10.1999 20.4998 10.1999 19.9998H13.7999C13.7999 20.4998 13.6249 20.9248 13.2749 21.2748C12.9249 21.6248 12.4999 21.7998 11.9999 21.7998ZM7.7499 17.3748H14.9749L7.7999 10.1748C7.78324 10.2415 7.7709 10.3121 7.7629 10.3868C7.75424 10.4621 7.7499 10.5331 7.7499 10.5998V17.3748Z"/>
                </g>
                </svg>

                )
            case "Search":
                return (
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Search">
                <path id="Vector" d="M19.5499 20.575L13.2499 14.3C12.7499 14.7167 12.1749 15.0417 11.5249 15.275C10.8749 15.5083 10.2082 15.625 9.5249 15.625C7.80824 15.625 6.35824 15.0333 5.1749 13.85C3.99157 12.6667 3.3999 11.2167 3.3999 9.5C3.3999 7.8 3.99157 6.354 5.1749 5.162C6.35824 3.97067 7.80824 3.375 9.5249 3.375C11.2249 3.375 12.6666 3.96667 13.8499 5.15C15.0332 6.33333 15.6249 7.78333 15.6249 9.5C15.6249 10.2167 15.5082 10.9 15.2749 11.55C15.0416 12.2 14.7249 12.7667 14.3249 13.25L20.5999 19.525L19.5499 20.575ZM9.5249 14.125C10.8082 14.125 11.8959 13.675 12.7879 12.775C13.6792 11.875 14.1249 10.7833 14.1249 9.5C14.1249 8.21667 13.6792 7.125 12.7879 6.225C11.8959 5.325 10.8082 4.875 9.5249 4.875C8.2249 4.875 7.12924 5.325 6.2379 6.225C5.3459 7.125 4.8999 8.21667 4.8999 9.5C4.8999 10.7833 5.3459 11.875 6.2379 12.775C7.12924 13.675 8.2249 14.125 9.5249 14.125Z"/>
                </g>
                </svg>

                )
            case "Settings":
                return (
                <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Settings">
                <path id="Vector" d="M9.7001 21.5L9.3001 18.45C9.03343 18.3667 8.76276 18.2417 8.4881 18.075C8.21277 17.9083 7.95843 17.7333 7.7251 17.55L4.9001 18.75L2.6001 14.75L5.0501 12.9C5.01676 12.75 4.9961 12.6 4.9881 12.45C4.97943 12.3 4.9751 12.15 4.9751 12C4.9751 11.8667 4.97943 11.725 4.9881 11.575C4.9961 11.425 5.01676 11.2667 5.0501 11.1L2.6001 9.25L4.9001 5.275L7.7251 6.45C7.95843 6.26667 8.21277 6.096 8.4881 5.938C8.76276 5.77933 9.03343 5.65 9.3001 5.55L9.7001 2.5H14.3001L14.7001 5.55C15.0001 5.66667 15.2708 5.79567 15.5121 5.937C15.7541 6.079 16.0001 6.25 16.2501 6.45L19.1001 5.275L21.4001 9.25L18.9251 11.125C18.9584 11.2917 18.9751 11.4417 18.9751 11.575C18.9751 11.7083 18.9751 11.85 18.9751 12C18.9751 12.1333 18.9708 12.2707 18.9621 12.412C18.9541 12.554 18.9334 12.7167 18.9001 12.9L21.3501 14.75L19.0501 18.75L16.2501 17.55C16.0001 17.75 15.7461 17.925 15.4881 18.075C15.2294 18.225 14.9668 18.35 14.7001 18.45L14.3001 21.5H9.7001ZM12.0001 15C12.8334 15 13.5418 14.7083 14.1251 14.125C14.7084 13.5417 15.0001 12.8333 15.0001 12C15.0001 11.1667 14.7084 10.4583 14.1251 9.875C13.5418 9.29167 12.8334 9 12.0001 9C11.1668 9 10.4584 9.29167 9.8751 9.875C9.29177 10.4583 9.0001 11.1667 9.0001 12C9.0001 12.8333 9.29177 13.5417 9.8751 14.125C10.4584 14.7083 11.1668 15 12.0001 15ZM12.0001 13.5C11.5834 13.5 11.2294 13.354 10.9381 13.062C10.6461 12.7707 10.5001 12.4167 10.5001 12C10.5001 11.5833 10.6461 11.2293 10.9381 10.938C11.2294 10.646 11.5834 10.5 12.0001 10.5C12.4168 10.5 12.7708 10.646 13.0621 10.938C13.3541 11.2293 13.5001 11.5833 13.5001 12C13.5001 12.4167 13.3541 12.7707 13.0621 13.062C12.7708 13.354 12.4168 13.5 12.0001 13.5ZM11.0001 20H12.9751L13.3251 17.325C13.8418 17.1917 14.3084 17 14.7251 16.75C15.1418 16.5 15.5501 16.1833 15.9501 15.8L18.4251 16.85L19.4251 15.15L17.2501 13.525C17.3334 13.2583 17.3878 13 17.4131 12.75C17.4378 12.5 17.4501 12.25 17.4501 12C17.4501 11.7333 17.4378 11.4793 17.4131 11.238C17.3878 10.996 17.3334 10.75 17.2501 10.5L19.4251 8.85L18.4501 7.15L15.9251 8.2C15.5918 7.85 15.1918 7.53733 14.7251 7.262C14.2584 6.98733 13.7918 6.79167 13.3251 6.675L13.0001 4H11.0251L10.6751 6.675C10.1751 6.79167 9.70843 6.975 9.2751 7.225C8.84176 7.475 8.4251 7.79167 8.0251 8.175L5.5501 7.15L4.5751 8.85L6.7251 10.45C6.64176 10.7 6.58343 10.95 6.5501 11.2C6.51677 11.45 6.5001 11.7167 6.5001 12C6.5001 12.2667 6.51677 12.525 6.5501 12.775C6.58343 13.025 6.64176 13.275 6.7251 13.525L4.5751 15.15L5.5501 16.85L8.0251 15.8C8.40843 16.1833 8.81677 16.5 9.2501 16.75C9.68343 17 10.1584 17.1917 10.6751 17.325L11.0001 20Z"/>
                </g>
                </svg>

                )
        }
}

export default Icon;