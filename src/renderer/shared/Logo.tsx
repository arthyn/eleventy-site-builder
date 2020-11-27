import React, { FunctionComponent } from 'react';

interface LogoProps {
    className?: string;
}

export const Logo: FunctionComponent<LogoProps> = ({ className = '' }) => {
    return (
        <svg
            className={`fill-current ${className}`}
            viewBox="0 0 333 278" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M100.19 221.802c0 6.891 1.287 10.322 3.861 10.322l23.533.029c2.659 0 4.003-3.431 4.003-10.322V18.239c0-4.832-1.115-7.234-3.374-7.234-.601 0-1.058.057-1.373.143L86.18 21.613c-2.46.515-3.69 2.831-3.69 6.92v14.783c0 4.718 1.116 6.977 3.375 6.777.114 0 4.203-1.03 12.324-3.088 1.344-.2 2.001 1.344 2.001 4.632v170.165zm98.479 9.779c3.031.572 6.577.858 10.694.858l15.67-.029c2.974 0 4.461-2.116 4.461-6.319v-9.236c0-3.774-1.373-5.69-4.146-5.69h-10.923c-2.145 0-3.975-.286-5.462-.915-1.487-.601-2.974-1.859-4.461-3.689s-2.602-4.746-3.374-8.692c-.772-3.946-1.144-8.922-1.144-14.869v-79.464c0-1.344.115-2.202.372-2.545.258-.372.744-.543 1.459-.543h19.701c2.573 0 3.86-2.46 3.86-7.378v-8.32c0-5.033-1.287-7.55-3.86-7.55h-19.644c-1.258 0-1.859-1.372-1.859-4.146V13.15c0-5.433-1.287-8.149-3.86-8.149h-15.412c-2.374 0-3.689 2.716-4.004 8.15l-2.773 59.904c0 2.774-.572 4.147-1.687 4.147h-9.551c-2.573 0-3.86 2.516-3.86 7.549v8.32c0 4.919 1.287 7.378 3.86 7.378h9.551c1.115 0 1.687 1.029 1.687 3.088v78.977c0 8.636.686 16.07 2.001 22.333 1.316 6.262 3.031 11.151 5.147 14.64 2.116 3.488 4.804 6.233 8.092 8.235 3.289 2.002 6.434 3.288 9.465 3.86zm75.947 13.554c-1.745 3.86-3.803 5.776-6.148 5.776-1.03 0-3.288-.515-6.834-1.601-3.489-1.03-5.347-1.544-5.547-1.544-2.46 0-3.689 3.803-3.689 11.409 0 3.803.4 6.176 1.229 7.091 2.974 4.432 8.607 6.634 16.928 6.634h1.544c5.262-.114 9.465-1.287 12.639-3.546 3.203-2.259 6.062-6.519 8.636-12.781 2.573-6.263 4.946-15.298 7.091-27.108l27.422-142.771c.2-1.43.314-2.63.314-3.546 0-4.003-.886-6.005-2.63-6.005h-12.925c-1.344 0-2.459.544-3.317 1.63-.858 1.087-1.515 3.146-1.916 6.234l-15.698 105.656c0 1.115-.229 1.687-.629 1.687-.114 0-.372-.629-.772-1.859L270.298 84.549c-.486-2.974-1.201-4.947-2.145-5.919-.943-.972-2.116-1.458-3.545-1.458h-18.644c-1.544 0-2.316 1.859-2.316 5.547 0 .83.114 1.973.315 3.403l30.195 125.5c2.059 9.751 3.088 15.441 3.088 17.1 0 7.091-.886 12.553-2.63 16.413zM22.7 222.088c0 6.891 1.287 10.322 3.86 10.322h23.562c2.66 0 4.003-3.431 4.003-10.322V18.497c0-4.833-1.115-7.235-3.374-7.235-.6 0-1.058.057-1.373.143L8.688 21.9C6.23 22.414 5 24.73 5 28.82v14.783c0 4.718 1.115 6.977 3.374 6.777.114 0 4.204-1.03 12.324-3.088 1.344-.2 2.002 1.344 2.002 4.632v170.165z" />
            <path d="M104.051 232.124l.005-4.642h-.005v4.642zm23.533.029l-.006 4.643h.006v-4.643zm-.744-221.005l1.157 4.496.033-.009.032-.008-1.222-4.48zM86.18 21.613l.95 4.544.104-.021.102-.027-1.157-4.496zm-.315 28.48v-4.642h-.206l-.204.018.41 4.624zm12.324-3.088l-.684-4.592-.23.035-.227.057 1.14 4.5zm111.174 185.434v4.642h.009l-.009-4.642zm-10.694-.858l-.861 4.562.861-4.562zm26.364.829v-4.642h-.008l.008 4.642zm-16.07-22.16l1.809-4.276-.035-.014-.035-.015-1.739 4.305zm-7.835-12.381l4.556-.892-4.556.892zm-.772-96.878l3.714 2.785.053-.07.05-.072-3.817-2.643zm-23.619-87.842l-4.634-.268-.002.027-.001.027 4.637.214zm-2.773 59.905l-4.638-.214-.005.107v.107h4.643zm2.001 131.792l4.544-.955-4.544.955zm5.147 14.64l3.97-2.408-3.97 2.408zm8.092 8.235l-2.413 3.966 2.413-3.966zm85.412 17.414l-4.231-1.912 4.231 1.912zm-12.982 4.175l1.36-4.439-.023-.007-.023-.007-1.314 4.453zm-8.007 16.956l3.855-2.587-.188-.28-.227-.25-3.44 3.117zm18.472 6.634v4.642h.051l.05-.001-.101-4.641zm12.639-3.546l-2.676-3.793-.008.005-.008.006 2.692 3.782zm8.636-12.781l-4.294-1.765 4.294 1.765zm7.091-27.108l-4.559-.875-.005.023-.004.023 4.568.829zm27.422-142.771l4.559.876.022-.116.016-.116-4.597-.644zm-18.558-7.92l3.644 2.876-3.644-2.877zm-1.916 6.233l4.592.682.007-.043.005-.042-4.604-.597zm-15.698 105.656l-4.592-.683-.05.34v.343h4.642zm-1.401-.172l-4.562.862.055.292.093.283 4.414-1.437zM270.298 84.549l-4.582.75.01.056.01.056 4.562-.862zm-2.145-5.919l-3.331 3.234 3.331-3.234zm-24.19 7.492l-4.598.644.031.223.053.219 4.514-1.086zm30.195 125.5l4.542-.959-.013-.063-.015-.064-4.514 1.086zM49.378 11.405l1.16 4.495.03-.008.032-.008-1.222-4.479zM8.688 21.9l.952 4.544.104-.022.104-.026-1.16-4.496zm-.314 28.48v-4.642H8.17l-.205.018.41 4.624zm12.324-3.088l-.684-4.592-.23.035-.227.057 1.141 4.5zm83.353 180.191c.498 0 1.032.206 1.397.53.268.239.217.34.055-.092-.345-.924-.67-2.829-.67-6.118h-9.285c0 3.602.319 6.858 1.26 9.373.482 1.288 1.234 2.676 2.468 3.774a7.102 7.102 0 004.775 1.818v-9.285zm23.538.029l-23.533-.029-.011 9.285 23.533.028.011-9.284zm-.644-5.68c0 3.277-.339 5.161-.689 6.063-.162.415-.212.319.051.093a2.05 2.05 0 011.277-.476v9.285a7.243 7.243 0 004.772-1.765c1.262-1.084 2.047-2.469 2.553-3.773.987-2.536 1.32-5.814 1.32-9.427h-9.284zm0-203.592v203.592h9.284V18.239h-9.284zm1.268-2.592c-.309 0-.777-.1-1.213-.41-.391-.279-.496-.542-.461-.467.04.087.154.386.25 1.01.095.608.156 1.418.156 2.46h9.284c0-2.625-.279-5.255-1.274-7.39-.526-1.13-1.333-2.296-2.569-3.176-1.28-.912-2.735-1.312-4.173-1.312v9.285zm-.151-.02a1.674 1.674 0 01-.134.03c-.02.004-.022.004-.004.002.038-.004.133-.012.289-.012V6.362c-.849 0-1.749.076-2.594.307l2.443 8.958zM87.336 26.109l40.661-10.465-2.314-8.992-40.661 10.465 2.314 8.992zm-.203 2.424c0-1.672.267-2.41.377-2.618.035-.066.009.007-.12.106a.896.896 0 01-.176.106c-.054.024-.086.03-.084.03l-1.902-9.088c-2.643.554-4.684 2.174-5.913 4.482-1.119 2.101-1.467 4.565-1.467 6.982h9.285zm0 14.783V28.533h-9.285v14.783h9.285zm-1.678 2.153c.273-.024.8.017 1.346.35.507.308.685.66.687.664.002.004-.028-.055-.07-.2a5.189 5.189 0 01-.134-.624c-.09-.564-.151-1.332-.151-2.343h-9.285c0 2.552.273 5.182 1.325 7.299.564 1.134 1.444 2.308 2.795 3.131 1.39.847 2.904 1.096 4.306.971l-.82-9.248zm11.593-2.964c-4.06 1.03-7.108 1.8-9.153 2.313-1.024.257-1.789.447-2.3.573l-.55.132-.068.015.1-.019a4.35 4.35 0 01.176-.027c.029-.004.284-.041.612-.041v9.285c.33 0 .592-.038.628-.043a4.99 4.99 0 00.396-.069 62.39 62.39 0 00.91-.214c.54-.132 1.327-.328 2.355-.586 2.058-.516 5.116-1.29 9.176-2.319l-2.282-9zm7.785 9.132c0-1.78-.153-3.781-.875-5.46-.386-.895-1.072-2.025-2.305-2.851-1.333-.894-2.823-1.11-4.148-.913l1.368 9.184a3.443 3.443 0 01-2.39-.559c-.73-.49-1-1.066-1.053-1.19-.057-.13-.012-.08.037.28.046.337.081.83.081 1.51h9.285zm0 170.165V51.637h-9.285v170.165h9.285zm104.53 5.995c-3.915 0-7.16-.273-9.833-.778l-1.722 9.124c3.39.64 7.236.938 11.555.938v-9.284zm15.662-.029l-15.67.029.017 9.284 15.67-.028-.017-9.285zm-.174-1.677c0 .792-.071 1.341-.155 1.697-.083.355-.158.43-.111.364.067-.095.213-.239.413-.334.177-.083.229-.05.035-.05v9.285c2.736 0 5.387-1.065 7.14-3.551 1.545-2.191 1.963-4.902 1.963-7.411h-9.285zm0-9.236v9.236h9.285v-9.236h-9.285zm.497-1.048c.162 0 .082.028-.122-.066a1.385 1.385 0 01-.523-.42c-.087-.12-.043-.118.021.145.064.266.127.712.127 1.389h9.285c0-2.312-.396-4.889-1.918-6.987-1.721-2.373-4.289-3.346-6.87-3.346v9.285zm-10.923 0h10.923v-9.285h-10.923v9.285zm-7.271-1.282c2.254.954 4.759 1.282 7.271 1.282v-9.285c-1.778 0-2.933-.243-3.653-.548l-3.618 8.551zm-6.255-5.036c1.724 2.121 3.807 4.049 6.326 5.066l3.477-8.61c-.456-.184-1.347-.773-2.597-2.311l-7.206 5.855zm-4.327-10.729c.823 4.203 2.122 8.015 4.327 10.729l7.206-5.855c-.768-.947-1.699-2.968-2.421-6.657l-9.112 1.783zm-1.23-15.76c0 6.106.379 11.409 1.23 15.76l9.112-1.783c-.692-3.541-1.057-8.189-1.057-13.977h-9.285zm0-79.464V183h9.285v-79.464h-9.285zm1.3-5.33c-.878 1.17-1.087 2.488-1.164 3.026-.105.736-.136 1.533-.136 2.304h9.285c0-.273.006-.493.015-.668.01-.177.021-.28.028-.323.007-.054 0 .026-.051.188a2.879 2.879 0 01-.153.389 3.744 3.744 0 01-.396.654l-7.428-5.57zm5.173-2.4c-1.218 0-3.699.265-5.276 2.543l7.634 5.285a3.526 3.526 0 01-1.657 1.303 2.624 2.624 0 01-.525.137c-.11.016-.174.016-.176.016v-9.285zm19.701 0h-19.701v9.284h19.701v-9.285zm-.782-2.736c0 1.04-.069 1.839-.172 2.43-.106.603-.227.88-.264.951-.025.048.079-.167.413-.38.353-.225.678-.266.805-.266v9.285c1.414 0 2.865-.348 4.183-1.188 1.299-.827 2.207-1.965 2.826-3.146 1.164-2.226 1.494-4.973 1.494-7.686h-9.285zm0-8.32v8.32h9.285v-8.32h-9.285zm.782-2.907c-.148 0-.488-.048-.846-.282-.334-.217-.428-.43-.392-.36.046.091.173.394.281 1.026.105.62.175 1.45.175 2.522h9.285c0-2.76-.328-5.533-1.474-7.775-.608-1.188-1.506-2.344-2.805-3.19-1.323-.863-2.789-1.226-4.224-1.226v9.285zm-19.644 0h19.644v-9.285h-19.644v9.285zm-6.501-8.789c0 1.571.146 3.404.859 5.003.383.86 1.017 1.849 2.065 2.622a5.985 5.985 0 003.577 1.164v-9.285c.586 0 1.299.18 1.934.649.582.429.829.901.905 1.071.072.162.046.173.009-.078a8.159 8.159 0 01-.064-1.146h-9.285zm0-59.905v59.905h9.285V13.15h-9.285zm.782-3.507c-.222 0-.612-.075-.983-.336-.329-.232-.388-.43-.317-.281.076.16.218.552.333 1.283.114.718.185 1.654.185 2.841h9.285c0-2.935-.325-5.803-1.412-8.099-.573-1.21-1.437-2.427-2.731-3.337-1.335-.94-2.851-1.355-4.36-1.355v9.284zm-15.412 0h15.412V.358h-15.412v9.284zm.631 3.776c.146-2.521.509-3.818.765-4.34.105-.214.075-.052-.23.172a2.043 2.043 0 01-1.166.392V.358c-3.48 0-5.758 2.216-6.944 4.638-1.074 2.195-1.526 4.973-1.694 7.885l9.269.537zm-2.771 59.851l2.774-59.905-9.275-.43-2.774 59.906 9.275.43zm-6.324 8.574a5.768 5.768 0 003.672-1.306c.988-.807 1.554-1.8 1.886-2.61.629-1.538.771-3.303.771-4.873h-9.285c0 .545-.028.932-.064 1.189-.037.272-.068.294-.015.166.049-.121.264-.597.831-1.06a3.517 3.517 0 012.204-.79v9.284zm-9.551 0h9.551v-9.285h-9.551v9.285zm.782 2.906c0-1.072.07-1.902.176-2.522.107-.632.234-.935.28-1.026.036-.07-.058.143-.392.36a1.651 1.651 0 01-.846.282v-9.285c-1.434 0-2.901.363-4.224 1.225-1.299.847-2.197 2.003-2.804 3.191-1.146 2.242-1.474 5.014-1.474 7.775h9.284zm0 8.321v-8.32h-9.284v8.32h9.284zm-.782 2.735c.127 0 .453.041.806.266.333.213.438.428.412.38-.037-.07-.158-.347-.263-.95-.104-.593-.173-1.39-.173-2.43h-9.284c0 2.712.329 5.459 1.494 7.685.618 1.181 1.526 2.319 2.825 3.146 1.318.84 2.769 1.188 4.183 1.188v-9.285zm9.551 0h-9.551v9.285h9.551v-9.285zm6.329 7.731c0-1.311-.157-3.016-.998-4.55a6.138 6.138 0 00-2.175-2.306 6.021 6.021 0 00-3.156-.875v9.285a3.267 3.267 0 01-1.688-.489 3.15 3.15 0 01-1.121-1.148c-.161-.295-.186-.478-.177-.428.008.04.03.198.03.511h9.285zm0 78.977v-78.977h-9.285v78.977h9.285zm1.903 21.378c-1.234-5.871-1.903-12.974-1.903-21.378h-9.285c0 8.867.704 16.634 2.101 23.287l9.087-1.909zm4.573 13.187c-1.734-2.858-3.311-7.177-4.573-13.187l-9.087 1.909c1.368 6.514 3.222 11.974 5.721 16.093l7.939-4.815zm6.536 6.677c-2.607-1.587-4.778-3.778-6.536-6.677l-7.939 4.815c2.474 4.079 5.678 7.377 9.648 9.794l4.827-7.932zm7.912 3.264c-2.36-.445-4.982-1.48-7.912-3.264l-4.827 7.932c3.647 2.22 7.315 3.758 11.017 4.456l1.722-9.124zm68.938 28.534c5.303 0 8.501-4.352 10.378-8.507l-8.461-3.823c-.734 1.624-1.377 2.47-1.793 2.86-.342.321-.353.186-.124.186v9.284zm-8.194-1.805c1.828.561 3.39.994 4.668 1.291 1.174.274 2.44.514 3.526.514v-9.284c.056 0-.322-.017-1.421-.273-.995-.231-2.336-.599-4.053-1.125l-2.72 8.877zm-4.187-1.34c-.37 0-.649-.048-.668-.051-.079-.012-.129-.023-.131-.023l.131.031c.2.05.515.135.965.259.89.248 2.2.626 3.936 1.138l2.628-8.905a288.304 288.304 0 00-4.078-1.178 44.967 44.967 0 00-1.195-.32 11.907 11.907 0 00-.484-.113 6.596 6.596 0 00-.323-.06c-.07-.011-.387-.063-.781-.063v9.285zm.953 6.767c0-3.673.311-5.935.697-7.129.191-.588.29-.563.068-.335-.338.349-.974.697-1.718.697v-9.285c-4.396 0-6.4 3.64-7.184 6.067-.844 2.609-1.148 6.051-1.148 9.985h9.285zm.027 3.974c.316.347.394.604.365.526a3.927 3.927 0 01-.155-.659c-.141-.816-.237-2.066-.237-3.841h-9.285c0 2.027.104 3.865.372 5.416.233 1.357.713 3.305 2.06 4.793l6.88-6.235zm13.488 5.109c-7.679 0-11.366-2.035-13.073-4.579l-7.71 5.174c4.241 6.32 11.821 8.689 20.783 8.689v-9.284zm1.544 0h-1.544v9.284h1.544v-9.284zm9.947-2.686c-2.187 1.556-5.389 2.585-10.048 2.687l.202 9.282c5.864-.127 11.069-1.443 15.23-4.404l-5.384-7.565zm7.034-10.764c-2.461 5.986-4.899 9.258-7.018 10.753l5.352 7.587c4.286-3.023 7.567-8.273 10.253-14.811l-8.587-3.529zm6.817-26.172c-2.122 11.688-4.426 20.354-6.817 26.172l8.587 3.529c2.756-6.706 5.199-16.112 7.366-28.042l-9.136-1.659zm27.431-142.818L295.906 228.59l9.118 1.751L332.446 87.57l-9.118-1.752zm.231-2.67c0 .591-.079 1.54-.27 2.902l9.195 1.288c.21-1.498.36-2.95.36-4.19h-9.285zm2.012-1.362a2.807 2.807 0 01-1.667-.575 2.416 2.416 0 01-.483-.484 1.195 1.195 0 01-.131-.215c-.003-.006.019.042.05.162.032.12.068.29.103.522.069.47.116 1.112.116 1.952h9.285c0-2.203-.223-4.48-1.054-6.37-.437-.997-1.135-2.096-2.259-2.952a6.481 6.481 0 00-3.96-1.325v9.285zm-12.925 0h12.925V72.5h-12.925v9.285zm.327-.136c.027-.035.032-.034.007-.013a.744.744 0 01-.296.141c-.044.01-.06.008-.038.008V72.5c-2.796 0-5.242 1.219-6.961 3.396l7.288 5.753zm-.956 3.954c.178-1.372.397-2.382.616-3.088.232-.747.398-.94.34-.866l-7.288-5.753c-1.697 2.15-2.462 5.323-2.876 8.513l9.208 1.194zm-15.71 105.741l15.698-105.656-9.184-1.364-15.698 105.655 9.184 1.365zm-5.221 5.647c3.05 0 4.412-2.386 4.805-3.419.404-1.066.466-2.152.466-2.91h-9.284c0 .356-.053.114.138-.387.102-.27.374-.879 1.01-1.46a4.26 4.26 0 012.865-1.109v9.285zm-5.186-5.064c.208.641.418 1.245.617 1.729a7.3 7.3 0 00.466.947c.098.167.328.539.7.927.186.194 1.373 1.461 3.403 1.461v-9.285a4.59 4.59 0 013.304 1.403c.334.349.522.662.574.751.126.212.172.34.133.246a16.72 16.72 0 01-.369-1.053l-8.828 2.874zM265.736 85.411l20.016 105.942 9.124-1.724L274.86 83.688l-9.124 1.723zm-.914-3.547c-.167-.173-.034-.117.21.557.228.627.469 1.563.684 2.877l9.163-1.498c-.271-1.659-.63-3.197-1.117-4.542-.471-1.3-1.166-2.716-2.277-3.861l-6.663 6.467zm-.214-.05c.093 0 .149.008.173.013.023.004.024.007.013.002a.146.146 0 01-.02-.01.652.652 0 01.048.044l6.663-6.466c-1.861-1.917-4.255-2.867-6.877-2.867v9.284zm-18.644 0h18.644V72.53h-18.644v9.284zm2.326.905c0-.77.041-1.356.101-1.782.061-.442.128-.605.121-.588-.005.013-.164.398-.659.794a3.072 3.072 0 01-1.889.671V72.53a6.212 6.212 0 00-3.915 1.367c-1.074.86-1.716 1.94-2.107 2.879-.744 1.785-.936 3.914-.936 5.943h9.284zm.27 2.76c-.195-1.394-.27-2.271-.27-2.76h-9.284c0 1.17.154 2.58.359 4.047l9.195-1.288zm30.112 125.057l-30.196-125.5-9.027 2.172 30.196 125.5 9.027-2.172zm3.217 18.186c0-1.329-.353-3.608-.846-6.341-.527-2.914-1.31-6.825-2.343-11.718l-9.084 1.918c1.026 4.858 1.787 8.668 2.29 11.451.252 1.393.433 2.499.55 3.333.058.417.097.744.121.992.026.263.027.368.027.365h9.285zm-3.043 18.325c2.137-4.729 3.043-10.95 3.043-18.325h-9.285c0 6.807-.867 11.509-2.219 14.501l8.461 3.824zM26.56 227.768a2.19 2.19 0 011.397.53c.269.239.217.339.056-.092-.346-.924-.67-2.829-.67-6.118h-9.285c0 3.602.318 6.858 1.259 9.372.482 1.288 1.235 2.677 2.468 3.775a7.102 7.102 0 004.775 1.818v-9.285zm23.562 0H26.56v9.285h23.562v-9.285zm-.64-5.68c0 3.278-.338 5.161-.688 6.063-.162.416-.212.319.05.094a2.048 2.048 0 011.278-.477v9.285c1.762 0 3.42-.604 4.772-1.765 1.262-1.084 2.047-2.469 2.553-3.772.987-2.537 1.32-5.815 1.32-9.428h-9.284zm0-203.591v203.591h9.285V18.497h-9.284zm1.269-2.592c-.309 0-.777-.1-1.213-.41-.391-.28-.496-.543-.461-.467.04.086.154.385.25 1.009.095.609.156 1.418.156 2.46h9.284c0-2.625-.279-5.255-1.274-7.39-.526-1.13-1.333-2.295-2.569-3.176-1.28-.911-2.735-1.311-4.173-1.311v9.285zm-.151-.021a1.606 1.606 0 01-.134.031c-.02.004-.022.003-.004.001.038-.004.133-.011.289-.011V6.62c-.849 0-1.749.076-2.594.306l2.443 8.958zM9.848 26.394L50.538 15.9l-2.319-8.99-40.69 10.494 2.319 8.99zm-.206 2.425c0-1.672.267-2.41.378-2.618.035-.066.008.007-.121.106a.898.898 0 01-.176.106c-.054.024-.085.03-.083.03l-1.902-9.088c-2.644.553-4.684 2.174-5.913 4.482-1.12 2.1-1.467 4.565-1.467 6.982h9.284zm0 14.783V28.82H.358v14.783h9.284zm-1.678 2.153c.273-.024.8.017 1.346.35.507.308.685.66.688.664.001.003-.028-.055-.07-.2a5.19 5.19 0 01-.135-.624c-.09-.564-.15-1.333-.15-2.343H.357c0 2.552.273 5.182 1.324 7.299.564 1.134 1.444 2.307 2.796 3.131 1.39.847 2.903 1.096 4.306.971l-.82-9.248zm11.593-2.964c-4.06 1.03-7.107 1.8-9.153 2.313-1.024.257-1.788.447-2.3.572-.259.064-.439.107-.55.133l-.068.015.1-.019c.028-.005.092-.016.176-.027.03-.004.285-.041.612-.041v9.285c.331 0 .592-.038.629-.043a5.033 5.033 0 00.395-.07c.085-.017.175-.038.255-.056.166-.038.388-.092.656-.157.54-.133 1.327-.328 2.354-.586 2.058-.516 5.116-1.29 9.176-2.319l-2.282-9zm7.785 9.132c0-1.78-.152-3.782-.875-5.46-.385-.895-1.072-2.025-2.304-2.852-1.333-.893-2.824-1.11-4.149-.912l1.368 9.184a3.444 3.444 0 01-2.389-.559c-.73-.49-1.001-1.066-1.054-1.19-.056-.13-.012-.08.038.28.046.337.08.83.08 1.51h9.285zm0 170.165V51.923h-9.284v170.165h9.284z" />
        </svg>
    )
}