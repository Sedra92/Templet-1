import React from 'react';
import {ProfileSkills,Profile,Span,ProfileList,ProfileItem,SpanWeb,Skills,SkillsDesc,Bar,Title,Perc,Parent,Pstitle,Spansp,Sp1,Sp2,Sp3} from './style'

function Profail(){
	
		return (
			
			<ProfileSkills>
            <div className="container">
                <Profile>
                    <Pstitle><Spansp>My </Spansp>Profile</Pstitle>
                    <ProfileList>
                        <ProfileItem>
                            <Span>Name</Span>
                            Leen hamza
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Birthday</Span>
                            21/1/1995
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Address</Span>
                            Damascus
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Phone</Span>
                            4444 5555 6666
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Email</Span>
                            Leen@hamza.com
                        </ProfileItem>
                        <ProfileItem>
                            <Span>Website</Span>
                            <SpanWeb>www.google.com</SpanWeb>
                        </ProfileItem>
                    </ProfileList>
                </Profile>
                <Skills>
                    <Pstitle>Some <Spansp>skills</Spansp></Pstitle>
                    <SkillsDesc>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
                    </SkillsDesc>
                    <Bar>
                        <Title>Bootstrap</Title>
                        <Perc>100%</Perc>
                        <Parent>
                            <Sp1></Sp1>
                        </Parent>
                    </Bar>
                    
                    <Bar>
                        <Title>CSS3</Title>
                        <Perc>90%</Perc>
                        <Parent>
                            <Sp2></Sp2>
                        </Parent>
                    </Bar>
                    
                    <Bar>
                        <Title>Photoshop</Title>
                        <Perc>80%</Perc>
                        <Parent>
                            <Sp3></Sp3>
                        </Parent>
                    </Bar>
                </Skills>
                
            </div>
        </ProfileSkills>	
		);
	}

export default Profail;