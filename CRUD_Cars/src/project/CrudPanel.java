package project;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JScrollPane;
import javax.swing.JTable;
import javax.swing.border.BevelBorder;
import javax.swing.table.DefaultTableModel;

public class CrudPanel extends JPanel {
    
    final private JButton ADD_B, MODIFY_B, ELIMINATE_B, SEE_B;
    final private JLabel PANEL_LB;
    final private JTable USERS_TABLE;
    final private DefaultTableModel MODEL_TABLE;
    
    public CrudPanel(Frame frame) {
    
        super.setBackground(new Color(223, 225, 227));
        super.setLayout(null);
        
        PANEL_LB = new JLabel("CRUD CARS");
        PANEL_LB.setFont(new Font("Arial", Font.BOLD, 35));
        PANEL_LB.setBounds(295, 25, 210, 30);
        PANEL_LB.setForeground(new Color(56, 56, 56));
        super.add(PANEL_LB);
        
        MODEL_TABLE = new DefaultTableModel();
        MODEL_TABLE.addColumn("Plate");
        MODEL_TABLE.addColumn("Name and Surname");
        MODEL_TABLE.addColumn("Car and Model");
        MODEL_TABLE.addColumn("Photo");
        MODEL_TABLE.addColumn("Color");
        
        USERS_TABLE = new JTable(MODEL_TABLE);
        JScrollPane SCROLL_TABLE = new JScrollPane(USERS_TABLE, JScrollPane.VERTICAL_SCROLLBAR_ALWAYS, JScrollPane.HORIZONTAL_SCROLLBAR_NEVER);
        SCROLL_TABLE.setBounds(19, 100, 745, 400);
        super.add(SCROLL_TABLE);
        
        ButtonAction ActionButtonAddB = new ButtonAction("Add", "Add a user", this); 
        ADD_B = new JButton(ActionButtonAddB);
        ADD_B.setBackground(new Color(250, 81, 81));
        ADD_B.setFont(new Font(Font.SANS_SERIF, Font.BOLD, 14));
        ADD_B.setBorder(new BevelBorder(BevelBorder.RAISED));
        ADD_B.setFocusable(false);
        ADD_B.setForeground(Color.BLACK);
        ADD_B.setBounds(395, 520, 80, 30);
        ADD_B.addActionListener((ActionEvent e) -> {
            frame.placeUser(ActionButtonAddB.getRemoverPanel());
        });
        super.add(ADD_B);
        
        MODIFY_B = new JButton("Modify");
        MODIFY_B.setBackground(new Color(250, 81, 81));
        MODIFY_B.setFont(new Font(Font.SANS_SERIF, Font.BOLD, 14));
        MODIFY_B.setBorder(new BevelBorder(BevelBorder.RAISED));
        MODIFY_B.setFocusable(false);
        MODIFY_B.setForeground(Color.BLACK);
        MODIFY_B.setBounds(490, 520, 80, 30);
        super.add(MODIFY_B);
        
        ELIMINATE_B = new JButton("Eliminate");
        ELIMINATE_B.setBackground(new Color(250, 81, 81));
        ELIMINATE_B.setFont(new Font(Font.SANS_SERIF, Font.BOLD, 14));
        ELIMINATE_B.setBorder(new BevelBorder(BevelBorder.RAISED));
        ELIMINATE_B.setFocusable(false);
        ELIMINATE_B.setForeground(Color.BLACK);
        ELIMINATE_B.setBounds(585, 520, 80, 30);
        super.add(ELIMINATE_B);
        
        SEE_B = new JButton("See");
        SEE_B.setBackground(new Color(250, 81, 81));
        SEE_B.setFont(new Font(Font.SANS_SERIF, Font.BOLD, 14));
        SEE_B.setBorder(new BevelBorder(BevelBorder.RAISED));
        SEE_B.setFocusable(false);
        SEE_B.setForeground(Color.BLACK);
        SEE_B.setBounds(680, 520, 80, 30);
        super.add(SEE_B);
    
    }
    
    @Override
    public void paintComponent(Graphics g){
    
        super.paintComponent(g);
        
        g.drawLine(20, 75, 760, 75);
    
    }
    
}
