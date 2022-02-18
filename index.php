<!DOCTYPE HTML>
<html lang="en">
    <head>
        <meta charset="UTF-8"/>
        <link rel="stylesheet" href="mg.css">
        <script src="https://code.jquery.com/jquery-1.12.4.js"></script>
        <script type="text/javascript" src="mg.js"></script>
        <script type="text/javascript" src="record/record.js"></script>
        <title>Memory Game</title>
    </head>
    <body>
        <button id="start">Start</button>
        <?php
            $conexao = mysqli_connect('alunos.epcc.pt','al220038','epcc2020','al220038');
            mysqli_select_db($conexao,'recordesDoRemember');
            $consulta = 'SELECT username, record FROM recordesDoRemember';
            $resultado = mysqli_query($conexao, $consulta);
            $linha = mysqli_fetch_row($resultado);

            $arquivo_json = file_get_contents("record/record.json");//pegar no ficheiro
            $decodifica_json = json_decode($arquivo_json);//decodificar

            array_push($decodifica_json, $linha);//inserir conteudo
            $arquivo_json_alterado = json_encode($decodifica_json);//codificar
            file_put_contents("record/record.json", $arquivo_json_alterado);//salvar                                            
        ?>
    </body>
</html>