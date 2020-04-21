<?php
App::uses('AppModel', 'Model');
/**
 * Employee Model
 *
 */
class Employee extends AppModel {
    var $validate = array(
        'nazwisko' => 'notBlank',
        'etat' => 'notBlank',
        'placa_pod' => array(
            '>0' => array(
                'rule' => array('comparison', 'is greater', 0),
                'message' => 'Value between 0 and 2000'),
            '<2000' => array(,
                'rule' => array('comparison', 'is less', 2000),
                'message' => 'Value between 0 and 2000'),
            )

        );
}
