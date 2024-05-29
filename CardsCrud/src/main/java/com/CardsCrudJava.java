/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */

package com;

import src.main.java.com.mycompany.IGU.MainView;
import javax.swing.JFrame;

/**
 *
 * @author Lenovo
 */
public class CardsCrudJava {
    
    public static void createInterface(){
        
        //Instancia la interfaz principal, crea el JFRAME a utilizar 
        //llama el metodo para las configuraciones a aplicar en el JFRAME
        //Muestra el Jframe
        
        MainView  interfacePrincipal = new MainView();        
        JFrame frame = new JFrame("Cars Crud");
        
        configureJframe(frame, interfacePrincipal);
        frame.setVisible(true);
        
    }
    
    public static void configureJframe(JFrame frame, MainView interfacePrincipal){
        
            //Configura las caracteristicas que tendra el JFRAME++
            frame.setUndecorated(true);
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
            frame.add(interfacePrincipal); // Añadir el JPanel al JFrame
            frame.setSize(850, 582);
        
            frame.setLocationRelativeTo(null);
    }

    public static void main(String[] args) {
        
        createInterface();
    }
}
