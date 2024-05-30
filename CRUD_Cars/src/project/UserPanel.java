package project;

import java.awt.Color;
import java.awt.Font;
import java.awt.event.ActionEvent;
import javax.swing.JButton;
import javax.swing.JComboBox;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JTextField;
import javax.swing.border.BevelBorder;
import javax.swing.border.LineBorder;

public class UserPanel extends JPanel {
    
    final private JButton BACK_B, NEXT_B;
    final private JComboBox<String> PHONE_CB;
    final private JLabel PANEL_LB, NAME_LB, SURNAME_LB, DOCUMENT_LB, ADDRESS_LB, PHONE_LB;
    final private JTextField NAME_TF, SURNAME_TF, DOCUMENT_TF, ADDRESS_TF, PHONE_TF;
    
    public UserPanel(Frame frame) {
    
        super.setBackground(Color.WHITE);
        super.setLayout(null);
        
        PANEL_LB = new JLabel("ADD USER");
        PANEL_LB.setFont(new Font("Arial", Font.BOLD, 25));
        PANEL_LB.setBounds(166, 20, 130, 20);
        PANEL_LB.setForeground(new Color(56, 56, 56));
        super.add(PANEL_LB);
        
        NAME_LB = new JLabel("Name:");
        NAME_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        NAME_LB.setForeground(Color.BLACK);
        NAME_LB.setBounds(23, 80, 50, 15);
        super.add(NAME_LB);
        
        NAME_TF = new JTextField();
        NAME_TF.setBounds(23, 105, 195, 28);
        NAME_TF.setBackground(new Color(246, 246, 246));
        NAME_TF.setBorder(new LineBorder(Color.BLACK));
        NAME_TF.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        super.add(NAME_TF);
        
        SURNAME_LB = new JLabel("Surname:");
        SURNAME_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        SURNAME_LB.setForeground(Color.BLACK);
        SURNAME_LB.setBounds(245, 80, 80, 15);
        super.add(SURNAME_LB);
        
        SURNAME_TF = new JTextField();
        SURNAME_TF.setBounds(245, 105, 195, 28);
        SURNAME_TF.setBackground(new Color(246, 246, 246));
        SURNAME_TF.setBorder(new LineBorder(Color.BLACK));
        SURNAME_TF.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        super.add(SURNAME_TF);
        
        DOCUMENT_LB = new JLabel("Document:");
        DOCUMENT_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        DOCUMENT_LB.setForeground(Color.BLACK);
        DOCUMENT_LB.setBounds(23, 158, 80, 15);
        super.add(DOCUMENT_LB);
        
        DOCUMENT_TF = new JTextField();
        DOCUMENT_TF.setBounds(23, 183, 195, 28);
        DOCUMENT_TF.setBackground(new Color(246, 246, 246));
        DOCUMENT_TF.setBorder(new LineBorder(Color.BLACK));
        DOCUMENT_TF.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        super.add(DOCUMENT_TF);
        
        ADDRESS_LB = new JLabel("Address:");
        ADDRESS_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        ADDRESS_LB.setForeground(Color.BLACK);
        ADDRESS_LB.setBounds(245, 158, 80, 15);
        super.add(ADDRESS_LB);
        
        ADDRESS_TF = new JTextField();
        ADDRESS_TF.setBounds(245, 183, 195, 28);
        ADDRESS_TF.setBackground(new Color(246, 246, 246));
        ADDRESS_TF.setBorder(new LineBorder(Color.BLACK));
        ADDRESS_TF.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        super.add(ADDRESS_TF);
        
        PHONE_LB = new JLabel("Phone Number:");
        PHONE_LB.setFont(new Font("Arial", Font.PLAIN, 17));
        PHONE_LB.setForeground(Color.BLACK);
        PHONE_LB.setBounds(23, 236, 120, 15);
        super.add(PHONE_LB);
        
        PHONE_CB = new JComboBox();
        PHONE_CB.addItem("0412");
        PHONE_CB.addItem("0414");
        PHONE_CB.addItem("0416");
        PHONE_CB.addItem("0424");
        PHONE_CB.addItem("0426");
        PHONE_CB.setSelectedItem(null);
        PHONE_CB.setBackground(new Color(246, 246, 246));
        PHONE_CB.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 17));
        PHONE_CB.setBounds(23, 261, 80, 28);
        PHONE_CB.setFocusable(false);
        super.add(PHONE_CB);
    
        PHONE_TF = new JTextField();
        PHONE_TF.setBounds(113, 261, 195, 28);
        PHONE_TF.setBackground(new Color(246, 246, 246));
        PHONE_TF.setBorder(new LineBorder(Color.BLACK));
        PHONE_TF.setFont(new Font(Font.SANS_SERIF, Font.PLAIN, 15));
        super.add(PHONE_TF);
        
        ButtonAction ActionButtonBackB = new ButtonAction("Back", "Return to previous window", this);
        BACK_B = new JButton(ActionButtonBackB);
        BACK_B.setBackground(new Color(73, 73, 73));
        BACK_B.setFont(new Font(Font.SANS_SERIF, Font.BOLD, 14));
        BACK_B.setBorder(new BevelBorder(BevelBorder.RAISED));
        BACK_B.setFocusable(false);
        BACK_B.setForeground(Color.WHITE);
        BACK_B.setBounds(138, 404, 80, 30);
        BACK_B.addActionListener((ActionEvent e) -> {
            frame.placeCrud(ActionButtonBackB.getRemoverPanel());
            resetPanel();
        });
        super.add(BACK_B);
        
        ButtonAction ActionButtonNextB = new ButtonAction("Next", "Continue to the next window", this);
        NEXT_B = new JButton(ActionButtonNextB);
        NEXT_B.setBackground(new Color(73, 73, 73));
        NEXT_B.setFont(new Font(Font.SANS_SERIF, Font.BOLD, 14));
        NEXT_B.setBorder(new BevelBorder(BevelBorder.RAISED));
        NEXT_B.setFocusable(false);
        NEXT_B.setForeground(Color.WHITE);
        NEXT_B.setBounds(245, 404, 80, 30);
        NEXT_B.addActionListener((ActionEvent e) -> {
            frame.placeVehicle(ActionButtonNextB.getRemoverPanel());
        });
        super.add(NEXT_B);
        
    }
    
    private void resetPanel(){
    
        NAME_TF.setText("");
        SURNAME_TF.setText("");
        DOCUMENT_TF.setText("");
        ADDRESS_TF.setText("");
        PHONE_CB.setSelectedItem(null);
        PHONE_TF.setText("");
    
    }
    
}
