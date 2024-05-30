package project;

import java.awt.event.ActionEvent;
import javax.swing.AbstractAction;
import javax.swing.JPanel;

public class ButtonAction extends AbstractAction {
    
    final private JPanel REMOVER_PANEL;

    public ButtonAction(String name, String description, JPanel removerPanel) {
    
        super.putValue(AbstractAction.NAME, name);
        super.putValue(AbstractAction.SHORT_DESCRIPTION, description);
        
        REMOVER_PANEL = removerPanel;
    
    }

    @Override
    public void actionPerformed(ActionEvent e) {        
    }
    
    public JPanel getRemoverPanel(){
    
        return REMOVER_PANEL;
    
    }
    
    public void setValues(String name, String description){
    
        super.putValue(AbstractAction.NAME, name);
        super.putValue(AbstractAction.SHORT_DESCRIPTION, description);
    
    }
    
}
