webpack?
===================
    프로젝트 크기가 방대해지면서 많은 파일을 불러오거나 하는 상황이 발생할 때,
    여러 개의 파일을 하나의 파일로 묶어주는 개발 자동화 도구(bundler).
    이 묶는 과정에서 여러가지 작업들이 실행되도록 작업계획을 세워주기도 한다.
## mode 
 - 'production', 'development', 'none' 등 다른 설정으로 번들링을 하는 모드 설정.

## loader 
 - 로더는 모듈을 최종적인 아웃풋으로 만들어가는 과정에서 쓰이는 것.
 - 동작방식이 규정되어 있음.
 - 어떤 로더로 파일을 불러와서 처리하고, 또 다른 로더로 넘기고... 등
 - ex) css-loader, style-loader... 
  
## plugin
 - 로더로 만들어진 결과물을 변형하는 것.
 - 로더에 비해 자유로운 사용.
 - ex) HtmlWebpackPlugin
  
    HtmlWebpackPlugin을 사용할 때는 template으로 번들링하기전 템플릿으로 사용하고 

    싶은 html파일을 지정. chunks으로 entry name을 지정하여 어떤 js bundle file을 

    html에 포함시킬지 지정.

# webpack cli command
 - npx webpack : 웹팩 실행하여 트랜스파일링을 진행하여 output을 낸다.

    npx webpack --config webpack.config.js 의 abbreviation.   

    production mode의 config로 실행하려면 npx webpack --config 

    webpack.config.prod.js 와 같이 파일 이름 포함하여 실행.

    npx webpack --watch를 통해 파일이 바뀔 때마다 webpack 작업을 수행할 수 있게 한다.
 