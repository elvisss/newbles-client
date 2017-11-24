((module) => {
    const express = require('express');
    const app = express();

    const speech = `<h2 class="op-terms-and-conditions-file--subtitle">El Servicio</h2>
    <ul class="op-terms-and-conditions-file--list">
        <li>El Banco de Crédito del Perú (el “Banco”) pone a disposición de sus clientes que hayan recibido una invitación por parte del Banco (el “Cliente”) sobre el servicio Inviertefacilbcp (el “Servicio”) el cual es una plataforma tecnológica que permite a los Clientes conocer su perfil de riesgo en las inversiones (el “Perfil”) y los productos de inversión recomendados por el Banco (depósitos a plazo y/o fondos mutuos) tomando en consideración su tolerancia al riesgo y plan de inversión (los "Productos"). El Servicio permite al Cliente simular diferentes escenarios de inversión de acuerdo a sus necesidades. El Servicio no incluye la contratación de los Productos, la cual se realizará por vía telefónica con un asesor de inversiones o por cualquier canal de atención que habilite el Banco para tal fin.</li>
        <li>En caso el Servicio no se encuentre disponible el Cliente podrá conocer su Perfil a fin de adquirir los Productos a través del asesor de inversión y los canales de atención que el Banco ponga a su disposición.</li>
    </ul>
    <h2 class="op-terms-and-conditions-file--subtitle">Perfil de Riesgo y Plan de Inversión</h2>
    <ul class="op-terms-and-conditions-file--list">
        <li>Para la determinación del Perfil, el Servicio tomará únicamente en consideración las respuestas que el Cliente dé durante el proceso de perfilamiento. Por tanto, el Perfil no contempla información adicional a la ingresada por el Cliente en la plataforma.</li>
        <li>El Cliente reconoce que los datos y ejemplos de las preguntas son únicamente referenciales y se encuentran orientadas a determinar el Perfil del Cliente.</li>
        <li>El Cliente declara conocer que el Perfil es referencial y podrá variar dependiendo de las respuestas que él dé. Por tanto, el Cliente libera de toda responsabilidad al Banco respecto de las decisiones de inversión pueda adoptar como consecuencia de conocer su Perfil.</li>
        <li>Luego de que el Cliente conozca su Perfil, éste definirá su plan de inversión tomando en consideración el monto, tipo de moneda y plazo a invertir (“Plan de inversión”). Posteriormente, el Banco le recomendará al Cliente los Productos acorde a su Perfil y Plan de Inversión. El Cliente reconoce que el Servicio cuenta con restricciones en cuanto al plazo, tipo de moneda y monto a invertir, por lo que si a pesar de dichas restricciones el Cliente desea conocer su Perfil y Plan de inversión deberá comunicarse con un asesor de inversiones.</li>
    </ul>
    <h2 class="op-terms-and-conditions-file--subtitle">Los Productos</h2>
    <ul class="op-terms-and-conditions-file--list">
        <li>El cliente declara y acepta que las condiciones que rigen a los Productos las podrá encontrar en los documentos contractuales a los que se hace referencia en el Servicio, así como también la información contenida en la misma plataforma tecnológica.</li>
        <li>El Cliente declara conocer que los fondos mutuos son productos administrados por Credicorp Capital SAF siendo este responsable por los mismos por lo que el Banco únicamente los comercializa. Para mayor información, el Cliente podrá ingresar a [link credicorp].</li>
        <li>El Cliente reconoce que las rentabilidades mostradas para los fondos mutuos son estimadas y pueden variar en el tiempo, nada garantiza que se repita en el futuro. Asimismo, declara conocer que las rentabilidades incluye la comisión unificada (por administración del fondo), pero no incluye el impuesto a la renta y la comisión por rescate anticipado (comisión que aplica en caso el Cliente retire su dinero antes del plazo mínimo de permanencia). El Cliente solo pagará el impuesto a la renta  sobre  las  ganancias  generadas,  cuando  el  Cliente  retire  su  dinero  dentro  del  plazo establecido.</li>
        <li>El Cliente declara conocer que las tasas de interés aplicables a los depósitos a plazo se mantendrán vigentes por el periodo que se indique en el Servicio.</li>
    </ul>
    <h2 class="op-terms-and-conditions-file--subtitle">DATOS PERSONALES Y SEGURIDAD DE LA INFORMACIÓN</h2>
    <ul class="op-terms-and-conditions-file--list">
        <li>El Cliente nos permite incorporar sus datos personales en nuestra base de usuarios, para conservarlos, actualizarlos y completarlos accediendo a fuentes de acceso público, analizar su perfil para ofrecerle productos personalizados y transferirlos a las empresas del Grupo Credicorp y socios comerciales que se indiquen en el tiempo en <a href="http://www.viabcp.com" target="_blank">http://www.viabcp.com</a>, quienes utilizarán sus datos para los mismos fines que el Banco. Recuerda que tu información quedará incorporada en nuestra base de datos hasta 10 años después de finalizada la relación con el Banco. Asimismo, deberás comunicarnos cualquier actualización de los datos. También, el Cliente podrá acceder, solicitar la rectificación, oponerse a su uso o pedir su exclusión de nuestra base en las agencias del Banco, <a href="http://www.viabcp.com" target="_blank">http://www.viabcp.com</a> o por teléfono.</li>
        <li>La información que registre el CLIENTE en el Servicio no reemplazará ningún dato en otros aplicativos o sistemas del Banco.</li>
        <li>El Cliente declara conocer los riesgos propios de las operaciones por internet (tales como el phishing, malware, virus, entre otros), asumiendo dichos riesgos y responsabilidades derivadas del uso del mismo, salvo que se acredite la vulneración de la seguridad de los sistemas informáticos del Banco.</li>
        <li>El Cliente reconoce que las Condiciones Generales de las Cuentas y Servicios del BANCO son de aplicación supletoria en todo lo no regulado en el presente documento.</li>
    </ul>`;

    app.get('/configuration/legal', (req, res) => {
        const data = {
            response: {
                speech: speech,
                version: '1.0.2'
            }
        };
        res.json(data);
    });

    module.exports = app;
})(module);
