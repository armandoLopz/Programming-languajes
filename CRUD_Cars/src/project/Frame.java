package project;

import java.io.File;
import java.io.IOException;
import javax.imageio.ImageIO;
import javax.swing.JFrame;
import javax.swing.JPanel;

public class Frame extends JFrame {

    final private CrudPanel CRUD_PANEL;
    final private UserPanel USER_PANEL;
    final private VehiclePanel VEHICLE_PANEL;
    
    public Frame() throws IOException {
    
        super.setTitle("  AutoManagement");
        super.setIconImage(ImageIO.read(new File("src/images/FrameIcon.png")));
        super.setSize(800, 610);
        super.setResizable(false);
        super.setLocationRelativeTo(null);
        super.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        
        CRUD_PANEL = new CrudPanel(this);
        super.add(CRUD_PANEL);
        
        USER_PANEL = new UserPanel(this);
        
        VEHICLE_PANEL = new VehiclePanel(this);
    
    }
    
    public void placeCrud(JPanel removerPanel){
    
        super.remove(removerPanel);
        super.setTitle("  AutoManagement");
        super.setSize(800, 610);
        super.setLocationRelativeTo(null);
        super.add(CRUD_PANEL);
        super.revalidate();
        super.repaint();
    
    }
    
    public void placeUser(JPanel removerPanel){
    
        super.remove(removerPanel);
        super.setTitle("  Add User");
        super.setSize(480, 500);
        super.setLocationRelativeTo(null);
        super.add(USER_PANEL);
        super.revalidate();
        super.repaint();
    
    }
    
    public void placeVehicle(JPanel removerPanel){
    
        super.remove(removerPanel);
        super.setTitle("  Vehicle Registration");
        super.setSize(480, 623);
        super.setLocationRelativeTo(null);
        super.add(VEHICLE_PANEL);
        super.revalidate();
        super.repaint();
    
    }
    
    public void placePanel(JPanel removerPanel, JPanel addPanel, String title, int width, int height){
    
        super.remove(removerPanel);
        super.setTitle("  " + title);
        super.setSize(width, height);
        super.setLocationRelativeTo(null);
        super.add(addPanel);
        super.revalidate();
        super.repaint();
    
    }
    
    public JPanel getCrudPanel(){
    
        return CRUD_PANEL;
    
    }
    
}
